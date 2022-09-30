import React, { useEffect }  from "react";
import { useDispatch } from "react-redux";
import {getCountries} from '../../redux/actions/index';
import { Link } from "react-router-dom";
import './loanding.css'

export const Loanding = () =>{

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCountries());
    },[dispatch]);

    return(
        <div className='loanding'>
            <div className="mensaje">
                <h5>PROYECTO INDIVIDUAL SOY HENRY</h5>
                <Link  to="/countries">
                    <button className="inicio">
                        COMENZAR
                    </button>
                </Link>

            </div>
        </div>
    )
}