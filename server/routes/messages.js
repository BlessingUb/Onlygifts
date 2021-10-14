const router = require("express").Router();
let Message = require("../models/message.model");

router.post("/profile", (req, res) => {
  Message.find()
    .then((message) => res.json(message))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").get((req, res) => {
  Message.find({ })
    .then((data) => {
      console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log('error: ', error);
    });
});

router.route("/send").post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  const newMessage = new Message({
    name,
    email,
    message,
  });

  newMessage
    .save()
    .then(() => res.status(200).json("Message sent!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
