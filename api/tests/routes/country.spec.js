/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  name: 'Argentina',
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  // beforeEach(() => Country.sync({ force: true })
  //   .then(() => Country.create(pokemon)));

  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries')
      .expect(200)
      .expect((res) => {
        expect(res.body).to.have.length(250);
      })
    );
  });

  describe('GET /countries/idCountry',() =>{
    it('debe obtener un 200',() =>{
      agent.get('/countries/ARG')
      .expect(200)
      .expect((res) => {
        expect(res.body).to.deep.equal([
          {
            id: "ARG",
            name: "Argentina",
            image: "https://restcountries.eu/data/arg.svg",
            continent: "Americas",
            capital: "Buenos Aires",
            subregion: "South America",
            area: "2780400 km2",
            population: 43590400,
            activities: []
          }
        ])
      })
    })
  });

  describe('GET /countries/?name=nameCountry', () =>{
    it('debe devolver un 404', () =>{
      agent.get('/countries/?name=ASGAR')
      expect(404)
    })
  })

  describe('POST /activities',()=>{
    it("devuelve 201 al crear una actividad",() =>{
      agent.post('/activities')
      .send(
        {
          name:"futbol", 
          difficulty:1, 
          duration:120,
          season:"Verano",
          countryID: "ARGENTINA"
        })
      .expect(201)
    })
  })

});
