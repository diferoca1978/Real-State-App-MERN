const { Router } = require('express');
const {
  createProperty,
  showAllByUserId,
  updateProperty,
  deleteProperty,
} = require('../controllers/prtsController');

const { validateJWT } = require('../middlewares/validateJWT');
const propertiesValidations = require('../middlewares/propertyValidations');
const validationResults = require('../middlewares/validationsResults');

const router = Router();

router.use(validateJWT); //? All routes that need Authentication must pass through this middleware.

router.get('/', showAllByUserId);

router.post('/create', propertiesValidations, createProperty);
router.put('/update/:id', propertiesValidations, updateProperty);

router.delete('/delete/:id', deleteProperty);

module.exports = router;
