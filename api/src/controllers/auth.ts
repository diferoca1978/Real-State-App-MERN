import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../dataBase/models/user';

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    let userRegistered = await User.findOne({ email });

    if (userRegistered) {
      return res.status(400).json({
        ok: false,
        errors: {
          email: {
            message: 'Email already registered',
          },
        },
      });
    }

    const user = new User(req.body);

    user.password = bcrypt.hashSync(password, 5);

    await user.save();

    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      ok: false,
      errors: {
        message: 'Contact with customer service',
      },
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const userToLogin = await User.findOne({ email });

    if (!userToLogin) {
      res.status(400).json({
        ok: false,
        errors: {
          message: 'User does not exists',
        },
      });
    }

    const validPass = bcrypt.compareSync(password, userToLogin!.password);

    if (!validPass) {
      return res.status(400).json({
        ok: false,
        errors: {
          password: {
            msg: 'Invalid credentials',
          },
        },
      });
    }

    res.status(201).json({
      ok: true,
      uid: userToLogin!.id,
      name: userToLogin!.name,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      ok: false,
      errors: {
        message: 'Contact with customer service',
      },
    });
  }
};
