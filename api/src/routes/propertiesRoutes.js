const { Router } = require('express');
const { showAll, createProperty } = require('../controllers/prtsController');
const { validateJWT } = require('../middlewares/validateJWT');

const router = Router();

router.use(validateJWT); //? All routes that need Authentication must pass through this middleware.

router.get('/', showAll);

router.post('/create', createProperty);

module.exports = router;
