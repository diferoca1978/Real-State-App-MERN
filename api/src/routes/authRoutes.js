const { Router } = require('express');
const { registerValidations } = require('../middlewares/authValidations');
const {
  userRegister,
  userLogin,
  userProfile,
  editProcess,
} = require('../controllers/authController');

const router = Router();

router.post('/register', registerValidations, userRegister);
router.post('/login', userLogin);
router.get('/profile', userProfile);
router.put('/update/:id', editProcess);

module.exports = router;
