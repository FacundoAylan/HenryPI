import React from 'react';
import { useSelector } from 'react-redux';
import {HomePage} from '../component/homePage'

export const Countries = () => {
    const countries = useSelector(store => store.countries);
    console.log(countries)
        
    return(
        <div className='contenedor'>
            <HomePage />
        </div>
    
    )
    
};

export default Countries;