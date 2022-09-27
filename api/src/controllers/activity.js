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
  // console.log(addAct)
  // console.log(countrymatch)

  const resact = await valdidateact.addCountries(countrymatch);

  res.send(resact);
}

const getActivities = async (req,res) => {
  const get = await Activity.findAll()
  res.send(get)
}
module.exports={
  newAct,
  getActivities
}