import React  from "react";
import { Link } from "react-router-dom";
import './loanding.css'

export const Loanding = () =>{

    return(
        <div className='loanding'>
            <div className="mensaje">
                <h5>PROYECTO INDIVIDUAL SOY HENRY</h5>
                <Link  to="/countries">
                    <button className="inicio">
                        INICIO
                    </button>
                </Link>

            </div>
        </div>
    )
}