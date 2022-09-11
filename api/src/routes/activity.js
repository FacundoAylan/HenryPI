const { Router } = require('express');
const { Actividad } = require('../controllers/activity.js')

const router= Router();

router.get("/", Actividad)  


module.exports = router;