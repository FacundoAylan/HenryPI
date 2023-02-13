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
    <div className="container-fluid">
      <div className="row">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search}
          onChange={(e) => inputHandler(e)}/>
      </div>
      <div className="row text-center">
        <div className="col">
          <Link to={`/activity/Add`} class="btn btn-outline-info ">
              activity
          </Link>
          <button type="button" class="btn btn-outline-info" onClick={() => reset()}>
            Reset
          </button>
        </div>
      </div>
      
  </div>
  )
}
export default SearchBar;
