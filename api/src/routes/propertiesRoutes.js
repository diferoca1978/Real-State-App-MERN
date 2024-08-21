const { Router } = require('express');
const {
  createProperty,
  showAllByUserId,
  updateProperty,
} = require('../controllers/prtsController');
const propertiesValidations = require('../middlewares/propertyValidations');
const { validateJWT } = require('../middlewares/validateJWT');
const fileUpload = require('../helpers/multerUploader');

const router = Router();

router.use(validateJWT); //? All routes that need Authentication must pass through this middleware.

router.get('/', showAllByUserId);

router.post(
  '/create',
  [fileUpload.single('image'), propertiesValidations],
  createProperty
);
router.put('/update/:id', propertiesValidations, updateProperty);

module.exports = router;
