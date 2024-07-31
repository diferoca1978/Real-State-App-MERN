import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../dataBase/models/user';
import { generateJwt } from '../helpers/jwt';

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

    user.password = bcrypt.hashSync(password, 8);

    await user.save();

    // * Generate JWT

    const token = await generateJwt(user.id, user.name);

    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
      token,
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

    // Here using non-null-asertion operator (!) to indicates to the compiler that we are sure that the value we want to access is not null or undefined
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

    // * Generate JWT

    const token = await generateJwt(userToLogin!.id, userToLogin!.name);

    res.status(200).json({
      ok: true,
      uid: userToLogin!.id,
      name: userToLogin!.name,
      token,
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

export const renewToken = async (req: Request, res: Response) => {
  const { uid, name } = req; // Here we already have the uid an the name ito the request previously inserted in the jwtValidate file.

  // Generate a new JWT
  const token = await generateJwt(uid as string, name);

  res.json({
    ok: true,
    token,
  });
};
