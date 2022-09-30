import React from "react";
import { Link } from "react-router-dom";
import './activityDetail.css'


export const Activity = ({ activities, countryName, dire}) => {
  if (activities && activities.length > 0) {
    return (
      <div className="contenedorDetail">
        <h3>Actividades de {countryName}</h3>
        <div className="detail">
          <div className="infoActivity">
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
        </div>
        <Link className="link"  to={"/activity/"+countryName} dire={dire}>
          <button>
            Agregar Actividad
          </button>
        </Link>
      </div>
  
  )} else {
    return  <Link className="link1"  to={"/activity/"+countryName} >Agregar Actividad</Link>
  }
};

