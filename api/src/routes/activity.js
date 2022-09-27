
const { Router } = require('express');
const { newAct } = require('../controllers/activity')
const { getActivities } = require('../controllers/activity')
const router= Router();

router.post('/', newAct )  
router.get('/',getActivities)


module.exports = router;