const { response } = require('express');
const { validationResult } = require('express-validator');

const resultValidations = (req, res = response, next) => {
  const fieldErrors = validationResult(req);
  if (!fieldErrors.isEmpty()) {
    res.status(400).json({
      ok: false,
      errors: fieldErrors.mapped(),
    });
  }
  next();
};

module.exports = resultValidations;
