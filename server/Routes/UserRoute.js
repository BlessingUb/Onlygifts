const bcrypt = require('bcryptjs');
const userRouter = require('express').Router();
const JWT = require('jsonwebtoken');
const passport = require('passport');

let User = require('../models/UserModel');

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
        return res.status(401).json({ username: 'username already exists' });
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
          console.log('Register Successfull √');
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
          res.status(200).json({
            isAuthenticated: true,
            user: savedUser.username,
            _id: savedUser.id,
          });
          console.log('Login Successfull √');
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

userRouter.get('/:username', (req, res) => {
  User.findOne({ username: `${req.params.username}` })
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json('Error: ' + err));
});

userRouter.get('/profile/:id', (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json('Error: ' + err));
});

userRouter.delete('/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User profile deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

userRouter.post('/update/:id', (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      user.profilePicture = req.body.profilePicture;
      user.bio = req.body.bio;

      user
        .save()
        .then(() => {
          res.status(200).json('User updated!');
          console.log('Changed profile');
        })
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

userRouter.delete('/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User profile deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});


module.exports = userRouter;
