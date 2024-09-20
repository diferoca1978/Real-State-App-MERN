const { check } = require('express-validator');
const fieldErrors = require('./validationsResults');

const propertiesValidations = [
  check('propertyName')
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
  check('imageUrls')
    .isArray({ min: 0 })
    .withMessage('imageUrls must be a non-empty array.')
    //Custom validator to check if the array contains empty strings
    .custom((imageUrls) => {
      if (imageUrls.length === 0) {
        throw new Error('imageUrls array cannot be empty.');
      }
      if (imageUrls.some((url) => !url)) {
        throw new Error('imageUrls array contains empty or invalid values.');
      }
      return true;
    }),
  fieldErrors,
];

module.exports = propertiesValidations;
