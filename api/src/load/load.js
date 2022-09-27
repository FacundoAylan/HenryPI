const axios = require ('axios');
const { Country, } = require ('../db')
const {verificar, verificarSub} = require ('./verificarLoad')

async function Load(req, res) {
  try {
    const api = await axios.get("https://restcountries.com/v3/all")
    
    const model = api.data.map((e) =>{
 
    //Crear archivo de verificacion
       let capital1 =  verificar(e.capital);
       let subregion1 = verificarSub(e.subregion);
      //console.log(e.cca3)
      return {
        id: e.cca3,
        name: e.translations.spa.common,
        imagen: e.flags[1],
        continente: e.continents[0],
        capital: capital1,
        subregion : subregion1,
        area: e.area,
        poblacion: e.population
      }
    });

    model.forEach(async (e) => {
      await Country.findOrCreate({
        where:{
          id: e.id,
          name: e.name.toUpperCase(),
          imagen: e.imagen,
          continente: e.continente,
          capital: e.capital,
          subregion: e.subregion,
          area: e.area,
          poblacion: e.poblacion
        }
      })
    });

  } catch (error) {
    res.send(error);
  }
}
module.exports= {Load}