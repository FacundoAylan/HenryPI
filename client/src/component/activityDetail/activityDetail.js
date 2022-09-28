import React from "react";
import { Link } from "react-router-dom";


export const Activity = ({ activities, countryName, name }) => {
  if (activities && activities.length > 0) {
    return (
      <div >
        <h3>Actividades de {countryName}</h3>
            {activities &&
              activities.map((a) => (
                <tr key={a.id}>
                  <h5>Nombre: {a.name}</h5>
                  <h5>Duracion: {a.duration} min</h5>
                  <h5>Temporada: {a.season}</h5>
                  <h5>Dificultad: {a.difficulty}</h5>
                </tr>
              ))}
            <Link  to={"/activity/"+countryName}><h3>Agregar Actividad</h3></Link>
      </div>
    );
  } else {
    return  <Link  to={"/activity/"+countryName}><h3>Agregar Actividad</h3></Link>
  }
};

