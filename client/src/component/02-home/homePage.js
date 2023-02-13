import React, { useEffect, useState } from "react";
import { Country } from "../05-country/country";
import { useSelector, useDispatch } from "react-redux";
import { Paginacion1 } from "../06-paginado/paginacion1";
import "./homePage.css";
import { getCountries, getActivities } from "../../redux/actions/index";
import { Barra } from "../03-barra/barra";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const countries = useSelector(
    (state) => state.countries,
    () => false
  );
  const activity = useSelector((state) => state.activities);

  const [pagina, setPagina] = useState(1);
  const porPagina = 10;

  const maximo = Math.ceil(countries?.length / porPagina);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, []);

  return (
    <div className="container-fluid">
      <Barra countries={countries} activity={activity} setPagina={setPagina} />
      <div className="row">
        <div className="country">
          {countries
            ?.slice(
              (pagina - 1) * porPagina,
              (pagina - 1) * porPagina + porPagina
            )
            .map((country) => {
              return (
                <div key={country.id}>
                  <Link to={"/country/" + country.id}>
                    <Country
                      className="card"
                      name={country.name}
                      imagen={country.imagen}
                      continente={country.continente}
                    />
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
      <div class="hola container-fluid row">
        <Paginacion1 pagina={pagina} setPagina={setPagina} maximo={maximo} />
      </div>
    </div>
  );
};
