const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

const countryRouter = require('./country');
const activityRouter = require('./activity');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countryRouter);
router.use('/activities', activityRouter);


module.exports = router;