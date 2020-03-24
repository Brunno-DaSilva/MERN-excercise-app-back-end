/*****************************
 *                           *
 *     User Controllers      *
 *                           *
 *************************** */

const express = require("express");
const router = express.Router();
const User = require("../models/user");

//======================
//         Read
//======================
router.get("/", (req, res) => {
  User.find()
    .then(foundUser => res.json(foundUser))
    .catch(err => res.status(400).json("Error: " + err));
});

//======================
//       Create
//======================
router.post("/add", (req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("User Added!"))
    .catch(err => res.status(400).json("Error:  + err"));
});

module.exports = router;
