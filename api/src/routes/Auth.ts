/*
  User Routes path:
  host + api/auth
*/

import { Router } from 'express';
import {
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

// All routes must be passed first throuhg the middleware
router.use(jwtValidation);

router.post('/register', registerValidations, registerUser);
router.post('/login', loginValidations, loginUser);
router.put('/:id', registerValidations, updateUser);
router.get('/renew', jwtValidation, renewToken);

export default router;
