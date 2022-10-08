const { Country, Activity } = require("../db");

const newAct= async (req, res) => {
  const { name, difficulty, duration, season, countryID } = req.body;

  const valdidateact = await Activity.findOne({
    where: {
      name: name,
    },
  });

  if (!valdidateact) {
    const addAct = await Activity.create({
      name: name,
      difficulty: difficulty,
      duration: duration,
      season: season,
    });
    const countrymatch = await Country.findAll({
      where: {
        name: countryID,
      },
    });

    const resact = await addAct.addCountries(countrymatch);

    return res.send(resact);
  }

  const countrymatch = await Country.findAll({
    where: {
      name: countryID,
    },
  });

  const resact = await valdidateact.addCountries(countrymatch);

  res.send(resact);
}

const getActivities = async (req,res) => {
  const get = await Activity.findAll()
  res.send(get)
}

const deleteActivity =async(req,res) =>{
   const {name} = req.body;
   const eliminar = await Activity.destroy({
      where: {
        name:name
    }
   })
  res.send(name)
}


module.exports={
  newAct,
  getActivities,
  deleteActivity
}