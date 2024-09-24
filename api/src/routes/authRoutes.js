const { Router } = require('express');
const {
  registerValidations,
  loginValidations,
} = require('../middlewares/authValidations');
const {
  userRegister,
  userLogin,
  userProfile,
  updateProcess,
  deleteProcess,
  showAllUsers,
  renewToken,
} = require('../controllers/authController');
const { validateJWT } = require('../middlewares/validateJWT');
const checkRole = require('../middlewares/roleVerification');

const router = Router();

router.post('/register', registerValidations, userRegister);

router.post('/login', loginValidations, userLogin);
router.use(validateJWT); //? All routes that need Authentication must pass through this middleware.
router.get('/profile/:id', checkRole('admin'), userProfile);
router.put(
  '/update/:id',
  registerValidations,
  checkRole('superAdmin', 'admin'),
  updateProcess
);
router.get('/all', checkRole('superAdmin'), showAllUsers);
router.delete('/delete/:id', checkRole('superAdmin'), deleteProcess);
router.get('/renew', validateJWT, renewToken);

module.exports = router;
