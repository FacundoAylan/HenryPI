import React, { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { FcGlobe } from "react-icons/fc";


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

    const reset = (e) =>{
        const element = ['ALL','Population','Continent', 'Activity']
        for (let i =0; i < element.length; i++){
            if (element[i] !== e){
                document.getElementById(element[i]).selectedIndex = 0;

            }
        }
    }
    const handlerOrder = (e) =>{
        reset('ALL');
        dispatch(setCountriesSort(e.target.value));
    }


    const handlerPopulation = (e) =>{
        reset('Population');
        setPagina(1);
        dispatch(orderByPopulation(e.target.value))
    }

    const handleFilterContinent = (e)=>{
        reset('Continent');
        setPagina(1);
        dispatch(filterCountriesContinent(e.target.value));
    }
    
    const handlerActivity = (e) =>{
        reset('Activity');
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
                <h1 >COUNTRY <FcGlobe className='FcGlobe'/></h1>
                
            </Link>

            <SearchBar className="search" setPagina={setPagina}/>
            
            <div className='orden'>
                <h2 className='sort'>Sort by:</h2>
                
                <select id='ALL' className="filtro1" onChange={(e) => handlerOrder(e)}>
                    <option value="true">ALL</option>
                    <option value="true">A-Z </option>
                    <option value="false">Z-A</option>
                </select>

                <select id='Population' className="filtro2" onChange={(e) => handlerPopulation(e)}>
                    <option value="true">Population</option>
                    <option value="true">Population↟</option>
                    <option value="false">Population↡</option>
                </select>

                <select id= 'Continent' className="filtro3" onChange={(e) => handleFilterContinent(e)}>
                    <option value="All">Continent</option>
                    <option value="South America"> South America </option>
                    <option value="North America"> North America </option>
                    <option value="Europe"> Europe </option>
                    <option value="Africa"> Africa </option>
                    <option value="Asia"> Asia </option>
                    <option value="Oceania"> Oceania </option>
                </select>
                <select id= 'Activity' className="filtro4" onChange={(e) => handlerActivity(e)}>
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