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
    const token = await generateJWT(newUser.id, newUser.name, newUser.role);

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
      userToLogin.roles
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
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);

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

  try {
    const userToupdate = await User.findById(userId);

    if (!userToupdate) {
      return res.status(404).json({
        ok: false,
        message: 'User not found ❌',
      });
    }

    const fieldsToUpdate = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      image: req.body.image,
    };
    if (fieldsToUpdate.password) {
      fieldsToUpdate.password = bcrypt.hashSync(fieldsToUpdate.password, 8);
    }

    const newUser = await User.findByIdAndUpdate(
      userToupdate._id.toString(),
      fieldsToUpdate,
      {
        new: true,
      }
    );
    return res.json({
      ok: true,
      message: 'User updated',
      user: newUser,
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

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        ok: false,
        message: 'User not found ❌',
      });
    }

    await User.findByIdAndDelete(userId);

    res.json({
      ok: true,
      message: 'Success 🚀 user was deleted',
    });
  } catch (error) {
    console.log(error);
    res.status(501).json({
      ok: false,
      message: 'Delete process not implemented',
    });
  }
};

const showAllUsers = async (req, res) => {
  const users = await User.find();
  res.json({
    ok: true,
    users,
  });
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
  showAllUsers,
  renewToken,
};
