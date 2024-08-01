/*
  User Routes path:
  host + api/auth
*/

import { Router } from 'express';
import {
  deleteUser,
  loginUser,
  registerUser,
  renewToken,
  updateUser,
} from '../controllers/auth';
import {
  registerValidations,
  loginValidations,
} from '../middlewares/authValidations';
import { jwtValidation } from '../middlewares/jwtValidate';

const router: Router = Router();

router.post('/register', registerValidations, registerUser);
router.post('/login', loginValidations, loginUser);
router.put('/:id', registerValidations, jwtValidation, updateUser);
router.delete('/delete/:id', jwtValidation, deleteUser);
router.get('/renew', jwtValidation, renewToken);

export default router;
