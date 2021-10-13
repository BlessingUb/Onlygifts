const bcrypt = require('bcryptjs');
const userRouter = require('express').Router();
const JWT = require('jsonwebtoken');
const passport = require('passport');

let User = require('../models/user.model');

const signToken = (userID) => {
  return JWT.sign(
    {
      iss: 'GiftHub',
      sub: userID,
    },
    'GiftHub',
    { expiresIn: '1h' }
  );
};

userRouter.get('/', (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err));
});

userRouter.route('/register').post((req, res) => {
  const { firstname, lastname, username, email, password } = req.body;
  bcrypt.hash(password, 12).then((hashpw) => {
    User.findOne({ username }).then((savedUser) => {
      if (savedUser) {
        return res.status(400).json({ username: 'usermname already exists' });
      }
      const newUser = new User({
        firstname,
        lastname,
        username,
        password: hashpw,
        email,
      });

      newUser
        .save()
        .then((newUser) => {
          res.status(200).json('User registered!');
          console.log(newUser.email);
        })
        .catch((err) => {
          res.status(400).json('Error: ' + err);
        });
    });
  });
});

userRouter.post('/login', (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(400).json('Error: ' + 'Invalid Email or password');
    }
    bcrypt
      .compare(password, savedUser.password)
      .then((match) => {
        if (match) {
          const token = signToken(savedUser._id);
          res.cookie('access_token', token, { httpOnly: true, sameSite: true });
          // res.json({ token: token });
          res.status(200).json({ isAuthenticated: true, user: savedUser.username, token: token });
          console.log('Login Successfull');
        } else {
          return res.status(400).json('Error: ' + 'Invalid Email or password');
        }
      })
      .catch((err) => console.log(err));
  });
});

userRouter.get('/logout', passport.authenticate(), (req, res) => {
  res.clearCookie('unauthorized');
  res.json({ user: { username: '', email: '' }, success: true });
});
// 616689795098dc5b221c896e
userRouter.get('/authenticated', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { username } = req.user;
  res.status(200).json({ isAuthenticated: true, user: { username } });
});

userRouter.get('/:username', (req, res) => {
  User.findOne({ username: `${req.params.username}` })
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// not functioning anymore in Insomnia - used to this morning...
userRouter.get('/profile/:id', (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// userRouter.get('/:id', async (req, res) => {
//   // User.findById(req.params.id)
//   //   .then((user) => res.json(user))
//   //   .catch((err) => res.status(400).json('Error: ' + err));
//   try {
//     const user = await User.findOne({ _id: req.params.id });
//     res.send(user);
//   } catch {
//     res.status(404);
//     res.send({ error: "User doesn't exist!" });
//   }
// });

userRouter.delete('/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User profile deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

userRouter.post('/update/:id', (req, res) => {
  User.findOne(req.params.id)
    .then((user) => {
      user.firstname = req.body.firstname;
      user.lastname = req.body.lastname;
      user.username = req.body.username;
      user.email = req.body.email;
      user.profilePicture = req.body.profilePicture;
      user.bio = req.body.bio;

      user
        .save()
        .then(() => res.json('User updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = userRouter;
