//const { Op } = require('sequelize');
const { Country, Activity } =require('../db');

const getCountry = async (req, res) =>{

    const { name } = req.query;
    
    try{

        if(!name){

            const countries = await Country.findAll({include: Activity});
            res.json(countries);

        } else {
            
            const country = await Country.findAll({
                where: {
                    name: name
                },
                include: {
                    model: Activity,
                    attributes: ['name', 'difficulty', 'duration', 'season'],
                    through: {
                        attributes: []
                    }
                },
            });
            if (country.length > 0){

                res.json(country);
            
            } else {

                res.status(404).send('Country not found');
            
            }
        }


    }catch(err){
        res.send(err);
    }

};

const getCountryId = async (req, res) =>{
    try{
        const id = req.params.id.toUpperCase();
        
        const country = await Country.findOne({
            where: {
              id: id,
            },
            include: {
                model: Activity,
                attributes: ['name', 'difficulty', 'duration', 'season'],
                through: {
                    attributes: []
                }
            },
          });
      
        res.json(country);

    }catch (err){
        res.send(err);
    }
}

module.exports = {
    getCountry,
    getCountryId
}
