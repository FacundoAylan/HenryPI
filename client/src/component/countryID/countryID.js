import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detail } from "../../redux/actions";
import { Activity } from "../activityDetail/activityDetail";
import './countryID.css'

export const CountryID = () =>{
    const {id} = useParams();
    const dispatch = useDispatch();
    const detailData = useSelector(state => state.detail)


    useEffect(()=>{
        dispatch(detail(id))
    },[])
    return(
        <div className="contenedorId">
            <a className= "atras" href="javascript:history.back()">
                <button>
                    Atras
                </button> 
            </a>
            <div className="id">
                    <img src={detailData?.imagen}/>
                    <div className="info">
                        <h1>{detailData?.name}</h1>
                        <h2>ID:{detailData?.id}</h2>
                        <h2>POBLACION: {detailData?.poblacion}</h2>
                        <h2>CONTINENTE: {detailData?.continente}</h2>
                        <h2>CAPITAL: {detailData?.capital}</h2>
                    </div>
            </div>

            <Activity countryName={detailData?.name} activities={detailData?.activities}/>

        </div>
    )
}