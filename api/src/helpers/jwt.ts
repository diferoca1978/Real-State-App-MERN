import jwt from 'jsonwebtoken';

//* this function recive the payload that we want to set in the sing method of JWT
export const generateJwt = (uid: string, name: string) => {
  return new Promise((resolve, reject) => {
    const payload = { uid, name };
    const secretKey = process.env.JWT_SEED as string;

    jwt.sign(
      payload,
      secretKey,
      {
        expiresIn: '2h',
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject('Cannot generated the token');
        }

        resolve(token);
      }
    );
  });
};
