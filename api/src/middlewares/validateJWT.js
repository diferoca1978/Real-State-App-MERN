const { request } = require('express');
const jwt = require('jsonwebtoken');

const validateJWT = (req = request, res, next) => {
  const token = req.header('x-token');

  if (!token) {
    res.status(401).json({
      ok: false,
      message: 'No token Provided 🙊',
    });
  }

  try {
    //* We have the payload that was settled when was generated the token, in this case contains the uid and the name values of the user. Then through the function verify of jsonwebtoken it's verified.
    const { uid, name, email } = jwt.verify(token, process.env.JWT_SEED);

    //* Here we're rewriting the request with the values that already brought into verified token. This is a middleware, so the request will pass to another functions after as a reference.

    req.uid = uid;
    req.name = name;
    req.email = email;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      ok: false,
      message: 'Invalid tokn',
    });
  }
};

module.exports = {
  validateJWT,
};
