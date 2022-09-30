import React from "react";
import { useState} from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getCountries,getCountriesName} from '../../redux/actions/index';
import './searchBar.css'

export const SearchBar = ({setPagina}) =>{
  const countries = useSelector(store => store.countries)
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  
  function onClickHandler(){
      if (search.length !== 0){
        dispatch(getCountriesName(search.toUpperCase()))
        setSearch('')
        setPagina(1)
      }
  }

  function inputHandler(e){
      setSearch(e.target.value)

    }
    const homeHandler = () => {
    dispatch(getCountries());
    setPagina(1)
  };

  return (
    <div className="ConteinerSearch">
        <input
        type="text"
        placeholder="Search by name"
        className="input"
        autocomplete="off"
        value={search}
        onChange={(e) => inputHandler(e)}
        />
        <button  className="button" onClick={onClickHandler}/>
        
          <button className="activity" >
            <Link to={`/activity/Add`}>
                activity
            </Link>
          </button>
        <button className="reset" onClick={() => homeHandler()}>
          Reset
        </button>
      
  </div>
  )
}
export default SearchBar;
