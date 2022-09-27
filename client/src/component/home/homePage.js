import React, { useEffect,useState} from 'react';
import Country from '../country/country'
import { useSelector, useDispatch } from 'react-redux';
import { Paginacion1 } from '../paginacion1';
import './homePage.css'
import { getCountries, filterCountriesContinent , setCountriesSort, orderByPopulation,getActivities, orderByActivity} from "../../redux/actions/index";
import { Barra } from '../barra/barra';
import {Link} from 'react-router-dom';


export const HomePage = () => {

    const countries = useSelector(
        (state) => state.countries,
        () => false
    );
    const activity = useSelector((state)=> state.activities)

    const detail = useSelector(store => store.detail);

    const [pagina, setPagina] = useState(1);
    const [porPagina, setPorPagina] = useState(10);

    
    const maximo = Math.ceil(countries?.length/porPagina);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCountries())
        dispatch(getActivities())
    },[]);


    return(
        <div className="homePage">
            <Barra  countries={countries} activity={activity}  setPagina={setPagina}/>
            <div className="country">
                { 
                countries?.slice((pagina-1)*porPagina,(pagina-1)*porPagina+porPagina)
                .map((country) => {
                        return (
                          <div key={country.id}>
                            <Link to={'/home/' + country.id}>
                              <Country
                                className="card"
                                name={country.name}
                                imagen={country.imagen}
                                continente={country.continente}
                              />
                            </Link>
                          </div>
                          )
                        }
                )}
            </div>
            <div className='paginado'>
              <Paginacion1 pagina={pagina} setPagina={setPagina} maximo={maximo}/>
            </div>
        
        </div>
    )
}