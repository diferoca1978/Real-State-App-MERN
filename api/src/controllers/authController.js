const { response, request } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../database/models/userModel');

const userRegister = async (req = request, res = response) => {
  const { email, password } = req.body;

  try {
    const userRegistered = await User.findOne({ email });

    if (userRegistered) {
      return res.status(400).json({
        ok: false,
        message: 'Email already exists',
      });
    }

    const newUser = new User(req.body);
    newUser.password = bcrypt.hashSync(password, 8);
    await newUser.save();

    res.json({
      ok: true,
      user: newUser,
    });
  } catch (error) {
    console.error({ error });
    res.status(500).json({
      ok: false,
      message: 'Please contact with customer service',
    });
  }
};

const userLogin = (req, res) => {
  const user = req.body;

  res.json({
    ok: true,
    user: user,
  });
};

const userProfile = (req, res) => {
  res.json({
    ok: true,
    message: 'From profile',
  });
};

const editProcess = (req, res) => {
  res.json({
    ok: true,
    message: 'From Edit',
  });
};

module.exports = {
  userRegister,
  userLogin,
  userProfile,
  editProcess,
};
