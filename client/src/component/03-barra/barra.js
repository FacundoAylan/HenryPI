import React, { useEffect,useState} from 'react';
import { useDispatch } from 'react-redux';
import {SearchBar} from '../04-search/searchBar'
import { getCountries, filterCountriesContinent , setCountriesSort, orderByPopulation,getActivities, orderByActivity} from "../../redux/actions/index";
import { Link } from 'react-router-dom';
import './barra.css'

export const Barra = ({ countries, activity, setPagina}) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCountries())
        dispatch(getActivities())
    },[]);

    const handleFilterContinent = (e)=>{
        setPagina(1);
        dispatch(filterCountriesContinent(e.target.value));
    }
    const handlerOrder = (e) =>{
        dispatch(setCountriesSort(e.target.value))
    }

    const handlerPopulation = (e) =>{
        dispatch(orderByPopulation(e.target.value))
    }
    const handlerActivity = (e) =>{
        setPagina(1);
        dispatch(orderByActivity(e.target.value))
        if (countries?.length === 0){
            return(
                <div>
                    <h1>No hay paises</h1>
                </div>
            )
        }
    }
    return(
        <div className="barra1">
            <Link to='/' className='titulo'>
                <h1 >COUNTRY</h1>
            </Link>
            <SearchBar className="search" setPagina={setPagina}/>
            
            <div className='orden'>
                <h2 className='sort'>Filtrar Por:</h2>
                
                <select className="filtro1" onChange={(e) => handlerOrder(e)}>
                    <option value="true">ALL</option>
                    <option value="true">A-Z </option>
                    <option value="false">Z-A</option>
                </select>

                <select className="filtro2" onChange={(e) => handlerPopulation(e)}>
                    <option value="true">Population</option>
                    <option value="true">Poblacio↟</option>
                    <option value="false">Poblacio↡</option>
                </select>

                <select className="filtro3" onChange={(e) => handleFilterContinent(e)}>
                    <option value="All">Continent</option>
                    <option value="South America"> South America </option>
                    <option value="North America"> North America </option>
                    <option value="Europe"> Europe </option>
                    <option value="Africa"> Africa </option>
                    <option value="Asia"> Asia </option>
                    <option value="Oceania"> Oceania </option>
                </select>
                <select className="filtro4" onChange={(e) => handlerActivity(e)}>
                    <option>Activity</option>
                    {
                        activity?.map(event=>(
                            <option>{event.name}</option>
                        ))
                    }
                </select>
            
            </div>
        </div>
    )
}