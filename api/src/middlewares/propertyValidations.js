const { check } = require('express-validator');
const fieldErrors = require('./validationsResults');

const propertiesValidations = [
  check('propertyname')
    .notEmpty()
    .withMessage('Madatory field')
    .isLength({ min: 3, max: 50 })
    .withMessage('The name must have at least 3 characters.'),

  check('neighborhood')
    .notEmpty()
    .withMessage('Madatory field')
    .isLength({ min: 3, max: 50 })
    .withMessage('The name must have at least 3 characters.'),

  check('address').notEmpty().withMessage('Madatory field'),

  check('price')
    .notEmpty()
    .withMessage('Madatory field')
    .isLength({ min: 3, max: 20 })
    .withMessage('The name must have at least 3 characters.'),

  check('description')
    .notEmpty()
    .withMessage('Madatory field')
    .isLength({ min: 3, max: 150 })
    .withMessage('The name must have at least 3 characters.'),

  check('propertyType').notEmpty().withMessage('Madatory field'),
  check('typeOffer').notEmpty().withMessage('Madatory field'),
  check('bedrooms').notEmpty().withMessage('Madatory field'),
  check('bathrooms').notEmpty().withMessage('Madatory field'),
  check('parking').notEmpty().withMessage('Madatory field'),
  // check('image')
  //   .optional()
  //   .custom((value, { req }) => {
  //     if (req.fieldErrors || !req.file) {
  //       throw new Error('Mandatory field / Invalid type file');
  //     }
  //   }),
  fieldErrors,
];

module.exports = propertiesValidations;
