/*
  User Routes path:
  host + api/auth
*/

import { Router } from 'express';
import { loginUser, registerUser } from '../controllers/auth';
import {
  registerValidations,
  loginValidations,
} from '../middlewares/authValidations';

const router: Router = Router();

router.post('/register', registerValidations, registerUser);
router.post('/login', loginValidations, loginUser);

export default router;
