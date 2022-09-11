const { Router } = require('express');
const { getCountry, getCountryId} = require('../controllers/country')
const router= Router();

router.get('/', getCountry);
router.get('/:id',getCountryId)    


module.exports = router;