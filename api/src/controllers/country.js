const { Country, Activity } =require('../db');

const getCountry = async (req, res) =>{

    const { id } = req.query;
    
    try{

        if(!id){

            const countries = await Country.findAll({include: Activity});
            res.json(countries);
            

        } else {
            
            const country = await Country.findAll({
                where: {
                    id: id
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


module.exports = {
    getCountry,
}
