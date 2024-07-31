import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

export const jwtValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //* Here request the token which will come in the headers as a x-token.
  const token = req.header('x-token') as string;

  if (!token) {
    res.status(401).json({
      ok: false,
      message: 'There is not token in the request',
    });
  }

  try {
    const secretKey = process.env.JWT_SEED as string;
    const payload = jwt.verify(token, secretKey) as JwtPayload;

    // Here we modify the Request to have the uid and the name, and the request will be pass as a reference to any function that follows called after the NextFunction.

    //? To view how to fix erros of types:
    //! Property 'uid' does not exist on type 'string | JwtPayload'.
    //! Property 'uid' does not exist on type 'Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>'.
    //! Property 'uid' does not exist on type 'payload'.
    //? Go to README.md

    req.uid = payload.uid;
    req.name = payload.name;
  } catch (error) {
    return res.status(401).json({
      ok: false,
      message: 'Token is not valid',
    });
  }

  next();
};
