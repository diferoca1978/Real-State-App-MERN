/*
  User Routes path:
  host + api/auth
*/

import { Router } from 'express';
import { loginUser, registerUser, renewToken } from '../controllers/auth';
import {
  registerValidations,
  loginValidations,
} from '../middlewares/authValidations';
import { jwtValidation } from '../middlewares/jwtValidate';

const router: Router = Router();

router.post('/register', registerValidations, registerUser);
router.post('/login', loginValidations, loginUser);
router.get('/renew', jwtValidation, renewToken);

export default router;
