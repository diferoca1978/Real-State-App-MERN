const { check } = require('express-validator');
const fieldErrors = require('./validationsResults');

const registerValidations = [
  check('name')
    .notEmpty()
    .withMessage('Mandatory Field.')
    .isLength({ min: 3, max: 50 })
    .withMessage('The name must have at least 3 characters.'),

  check('email')
    .notEmpty()
    .withMessage('Mandatory Field.')
    .isEmail()
    .withMessage('Must be a valid email.'),

  check('password')
    .notEmpty()
    .withMessage('Mandatory Field.')
    .isLength({ min: 3, max: 20 })
    .withMessage('Must have at least 3 characters.'),
  fieldErrors,
];

module.exports = {
  registerValidations,
};
