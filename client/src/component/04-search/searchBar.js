import React from "react";
import { useState} from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
import { getCountries,getCountriesName} from '../../redux/actions/index';
import './searchBar.css'
import {FcSearch } from "react-icons/fc";

export const SearchBar = ({setPagina}) =>{

  const [search, setSearch] = useState('')


  const allCountries = useSelector(state => state.allCountries)
  const dispatch = useDispatch()
  
  const inputHandler = (e) => {
      setSearch(e.target.value)
      if(e.target.value !== ''){

        const newFilter = allCountries?.filter((value) => {
          return value.name.toLowerCase().includes(search.toLowerCase());
        });
        if(newFilter.length !== 0) {
          dispatch(getCountriesName(newFilter));
        }
        
      }else{
        dispatch(getCountries());
      }
  };
  
  const reset = () => {
    dispatch(getCountries());
    setPagina(1)
  };



  return (
    <div className="ConteinerSearch">
        <input
        placeholder="Search by name"
        className="input"
        value={search}
        onChange={(e) => inputHandler(e)}
        />
        <button  className="button" >
          <FcSearch/>
        </button>
        
        <button className="activity" >
          <Link to={`/activity/Add`} className = 'linkActivity'>
              activity
          </Link>
        </button>

        <button className="reset" onClick={() => reset()}>
          Reset
        </button>
      
  </div>
  )
}
export default SearchBar;
