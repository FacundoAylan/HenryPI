const { Country, Activity } = require('../db');

const Actividad = async (req,res) => {

    const { name, difficulty, duration, season } =req.body;

    const actividad = await Activity.findOne({
        where: {
            name: name
        }
    });

    if (!actividad) {

        const newActivity = await Activity.create({ name, difficulty, duration, season });
        return res.json(newActivity);
         
    }else{
        return res.json(actividad)
    }
}

module.exports = {
    Actividad
}
