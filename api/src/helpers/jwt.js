const jwt = require('jsonwebtoken');

const generateJWT = (uid, name, roles) => {
  return new Promise((resolve, reject) => {
    const payload = { uid, name, roles };

    jwt.sign(
      payload,
      process.env.JWT_SEED,
      {
        expiresIn: '2h',
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
