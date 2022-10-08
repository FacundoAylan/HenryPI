const { Router } = require('express');
const { getCountry} = require('../controllers/country')
const router= Router();

router.get('/', getCountry);

module.exports = router;