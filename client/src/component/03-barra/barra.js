import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FcGlobe } from "react-icons/fc";

import { SearchBar } from "../04-search/searchBar";
import {
  getCountries,
  filterCountriesContinent,
  setCountriesSort,
  orderByPopulation,
  getActivities,
  orderByActivity,
} from "../../redux/actions/index";
import { Link } from "react-router-dom";
import './barra.css'

export const Barra = ({ countries, activity, setPagina }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, []);

  const handlerOrder = (e) => {
    dispatch(setCountriesSort(e.target.value));
  };

  const handlerPopulation = (e) => {
    dispatch(orderByPopulation(e.target.value));
  };

  const handleFilterContinent = (e) => {
    setPagina(1);
    dispatch(filterCountriesContinent(e.target.value));
  };

  const handlerActivity = (e) => {
    setPagina(1);
    dispatch(orderByActivity(e.target.value));
    if (countries?.length === 0) {
      return (
        <div>
          <h1>No hay paises</h1>
        </div>
      );
    }
  };
  return (
      <div class="container-fluid">
            <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">           
              <Link to="/" class="title navbar-brand">
                COUNTRY <FcGlobe className="FcGlobe" />
              </Link>
              <button class=" button navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Sort by:</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">

              <li class="nav-item dropdown">

                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                ALL
                </a>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><button class="dropdown-item" value="true"onClick={(e) => handlerOrder(e)}> A-Z</button></li>
                  <li><button class="dropdown-item"  value="false" onClick={(e) => handlerOrder(e)}>Z-A</button></li>
                </ul>
              </li>


                <li class="nav-item dropdown">

                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Population
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li><button class="dropdown-item" value="true"onClick={(e) => handlerPopulation(e)}> Poblacio↟</button></li>
                    <li><button class="dropdown-item"  value="false" onClick={(e) => handlerPopulation(e)}>Poblacio↡ </button></li>
                  </ul>
                </li>

                <li class="nav-item dropdown">

                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Continent
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li><button class="dropdown-item" value="South America" onClick={(e) => handleFilterContinent(e)}> South America</button></li>
                    <li><button class="dropdown-item"  value="North America" onClick={(e) => handleFilterContinent(e)}>North America </button></li>
                    <li><button class="dropdown-item"  value="Europe" onClick={(e) => handleFilterContinent(e)}>Europe </button></li>
                    <li><button class="dropdown-item"  value="Africa" onClick={(e) => handleFilterContinent(e)}>Africa</button></li>
                    <li><button class="dropdown-item"   value="Asia" onClick={(e) => handleFilterContinent(e)}>Asia </button></li>
                    <li><button class="dropdown-item"  value="Oceania" onClick={(e) => handleFilterContinent(e)}>Oceania</button></li>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Activity
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    {activity?.map((event) => (
                      <li><button class="dropdown-item" value="true"onClick={(e) => handlerActivity(e)}> {event.name}</button></li>
                    ))}
                  </ul>
                </li>

              </ul>
              <form class="d-flex mt-3" role="search">
                <SearchBar className="search" setPagina={setPagina} />
              </form>

            </div>
          </div>
        </div>
      </nav>
    </div>

  );
};
