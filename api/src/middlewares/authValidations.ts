import { check } from 'express-validator';
import { fieldsErrors } from './handleErrors';

export const registerValidations = [
  check('avatar').optional(),

  check('name')
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 3, max: 30 })
    .withMessage('Must have at least 3 characters'),

  check('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Must be a valid email'),

  check('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 3, max: 20 })
    .withMessage('Must have at least 3 characters'),
  fieldsErrors,
];

export const loginValidations = [
  check('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid credentials'),

  check('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 3, max: 20 })
    .withMessage('Invalid credentials'),
  fieldsErrors,
];
