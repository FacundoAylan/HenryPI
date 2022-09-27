import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detail } from "../redux/actions";
import { Activity } from "./activityDetail";


export const CountryID = () =>{
    const {id} = useParams();
    const dispatch = useDispatch();
    const detailData = useSelector(state => state.detail)


    useEffect(()=>{
        dispatch(detail(id))
    },[])
    console.log(detailData)
    return(
        <div>
                <h1>{detailData?.name}</h1>
                <img src={detailData?.imagen}/>
                <label>ID:</label>
                <h2>{detailData?.id}</h2>
                <label>POBLACION:</label>
                <h2>{detailData?.poblacion}</h2>
                <label>Continente:</label>
                <h2>{detailData?.continente}</h2>
                <label>CAPITAL:</label>
                <h2>{detailData?.capital}</h2>
                <label>ACTIVIDADES:</label>
                <Activity countryName={detailData?.name} activities={detailData?.activities}/>


        </div>
    )
}