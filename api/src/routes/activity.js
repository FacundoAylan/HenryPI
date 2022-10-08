
const { Router } = require('express');
const { newAct, getActivities, deleteActivity  } = require('../controllers/activity')
const router= Router();

router.post('/', newAct )  
router.get('/',getActivities)
router.delete('/',deleteActivity)

module.exports = router;