const { response, request } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../database/models/userModel');
const { generateJWT } = require('../helpers/jwt');

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

    newUser = new User(req.body);
    newUser.password = bcrypt.hashSync(password, 8);
    await newUser.save();

    //Generate JWT
    const token = await generateJWT(newUser.id, newUser.name, newUser.email);

    res.json({
      ok: true,
      user: newUser,
      token,
    });
  } catch (error) {
    console.error({ error });
    res.status(500).json({
      ok: false,
      message: 'Please contact with customer service',
    });
  }
};

const userLogin = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    const userToLogin = await User.findOne({ email });

    if (!userToLogin) {
      return res.status(404).json({
        ok: false,
        errors: {
          email: {
            message: 'User does not exists',
          },
        },
      });
    }

    const validPass = bcrypt.compareSync(password, userToLogin.password);

    if (!validPass) {
      return res.status(401).json({
        ok: false,
        errors: {
          password: {
            message: 'Invalid credentials',
          },
        },
      });
    }

    // GenerateJWT

    const token = await generateJWT(
      userToLogin.id,
      userToLogin.name,
      userToLogin.email
    );

    res.status(200).json({
      ok: true,
      user: {
        userId: userToLogin.id,
        name: userToLogin.name,
        email: userToLogin.email,
        image: userToLogin.image,
        token,
      },
    });
  } catch (error) {
    console.error('Error during user login:', error);
    res.status(500).json({
      ok: false,
      message: 'Please contact with customer service',
    });
  }
};

const userProfile = async (req, res) => {
  const { uid } = req;

  try {
    const user = await User.findById(uid);

    if (!user) {
      return res.status(404).json({
        ok: false,
        message: 'User not found ❌',
      });
    }

    res.json({
      ok: true,
      user,
    });
  } catch (error) {
    console.error({ error });
    res.status(500).json({
      ok: false,
      message: 'Please contact with customer service',
    });
  }
};

const updateProcess = async (req, res) => {
  const userId = req.params.id;
  const uid = req.uid;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        ok: false,
        message: 'User not found ❌',
      });
    }

    if (uid !== userId) {
      return res.status(403).json({
        ok: false,
        message: 'Unauthorized to make changes',
      });
    }

    const newUser = {
      image: req.body.image,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      user: req.uid,
    };

    if (newUser.password) {
      newUser.password = bcrypt.hashSync(newUser.password, 8);
    }

    const userUpdated = await User.findByIdAndUpdate(userId, newUser, {
      new: true,
    });

    res.json({
      ok: true,
      message: 'Success 🚀 user updated',
    });
  } catch (error) {
    console.log(error);
    res.status(501).json({
      ok: false,
      message: 'Update process not implemented',
    });
  }
};

const deleteProcess = async (req, res) => {
  const userId = req.params.id;
  const uid = req.uid;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        ok: false,
        message: 'User not found ❌',
      });
    }

    if (uid !== userId) {
      return res.status(403).json({
        ok: false,
        message: 'Unauthorized to make changes',
      });
    }

    await User.findByIdAndDelete(userId);

    res.json({
      ok: true,
      message: 'Success 🚀 in delete process',
    });
  } catch (error) {
    console.log(error);
    res.status(501).json({
      ok: false,
      message: 'Delete process not implemented',
    });
  }
};

const renewToken = async (req, res) => {
  const { uid, name } = req;

  const token = await generateJWT(uid, name);

  res.json({
    ok: true,
    uid,
    name,
    token,
  });
};

module.exports = {
  userRegister,
  userLogin,
  userProfile,
  updateProcess,
  deleteProcess,
  renewToken,
};
