const jwt = require('jsonwebtoken');

const generateJWT = (uid, name, email) => {
  return new Promise((resolve, reject) => {
    const payload = { uid, name, email };

    jwt.sign(
      payload,
      process.env.JWT_SEED,
      {
        expiresIn: '1h',
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject('Error generating the token');
        }
        resolve(token);
      }
    );
  });
};

module.exports = {
  generateJWT,
};
