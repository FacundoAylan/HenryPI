import React from "react";
import { Link } from "react-router-dom";


export const Activity = ({ activities, countryName }) => {
  if (activities && activities.length > 0) {
    console.log("hola");
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
      </div>
    );
  } else {
    return <Link  to="/activity"><h3>Plan activities for this country!</h3></Link>
  }
};

