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
const fileUpload = require('../helpers/multerUploader');

const router = Router();

router.post('/register', registerValidations, userRegister);

router.post('/login', loginValidations, userLogin);
router.use(validateJWT); //? All routes that need Authentication must pass through this middleware.
router.get('/profile/:id', userProfile);
router.put(
  '/update/:id',
  fileUpload.single('image'),
  registerValidations,
  updateProcess
);
router.delete('/delete/:id', deleteProcess);
router.get('/renew', validateJWT, renewToken);

module.exports = router;
