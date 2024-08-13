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
  renewToken,
} = require('../controllers/authController');
const { validateJWT } = require('../middlewares/validateJWT');

const router = Router();

router.post('/register', registerValidations, userRegister);

router.post('/login', loginValidations, userLogin);
router.use(validateJWT); //? All routes that need Authentication must pass through this middleware.
router.get('/profile', userProfile);
router.put('/update/:id', updateProcess);
router.delete('/delete/:id', deleteProcess);
router.get('/renew', validateJWT, renewToken);

module.exports = router;
