const { response, request } = require('express');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const User = require('../database/models/userModel');
const { generateJWT } = require('../helpers/jwt');
const cloudinary = require('../helpers/cloudinaryConf');

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
  const uid = req.uid;

  try {
    const userToupdate = await User.findById(userId);

    if (!userToupdate) {
      return res.status(404).json({
        ok: false,
        message: 'User not found ❌',
      });
    }

    if (userToupdate._id.toString() !== uid) {
      return res.status(403).json({
        ok: false,
        message: 'Unauthorized to make changes',
      });
    }

    if (!req.file) {
      const userUpdated = {
        name: req.body.name || userToupdate.name,
        email: req.body.email || userToupdate.email,
        password: req.body.password,
        image: userToupdate.image,
      };
      if (userUpdated.password) {
        userUpdated.password = bcrypt.hashSync(userUpdated.password, 8);
      }

      const newUser = await User.findByIdAndUpdate(
        userToupdate._id.toString(),
        userUpdated,
        {
          new: true,
        }
      );
      return res.json({
        ok: true,
        message: 'User updated',
        user: newUser,
      });
    } else {
      if (req.file) {
        const path = req.file.path;

        const uploadResp = await cloudinary.uploader.upload(path, {
          upload_preset: 'real_estate',
          folder: 'real_estate_img/Users_Images',
        });

        if (uploadResp) {
          const userUpdated = {
            name: req.body.name || userToupdate.name,
            email: req.body.email || userToupdate.email,
            password: req.body.password,
            image: uploadResp.secure_url,
            cloudinary_id: uploadResp.public_id,
          };
          if (userUpdated.password) {
            userUpdated.password = bcrypt.hashSync(userUpdated.password, 8);
          }

          fs.unlinkSync(path);

          const newUser = await User.findByIdAndUpdate(
            userToupdate._id.toString(),
            userUpdated,
            {
              new: true,
            }
          );

          // To destroy the existing image in cloudinary.
          if (newUser.cloudinary_id) {
            await cloudinary.uploader.destroy(userToupdate.cloudinary_id);
          }
          res.json({
            ok: true,
            message: 'User updated with image',
            user: newUser,
          });
        }
      }
    }
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
