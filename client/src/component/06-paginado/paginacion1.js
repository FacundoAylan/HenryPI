import React, { useEffect, useState } from "react";
import './paginacion.css'

export const Paginacion1 = ({pagina, setPagina, maximo}) =>{
    
    const page = [];

    for(let i=1;i<=maximo;i++){
      page.push(i)
    }

    const nextPage = () =>{
      if(pagina >= maximo){
        setPagina(1);
      }else{
        setPagina(pagina+1);
    }

    };
    const previusPage = () =>{
        if(pagina <= 1){
            setPagina(maximo);
        }else{
            setPagina(pagina-1);
        }
    };
    
    const onChange = (e) => {
      setPagina (Number(e.target.value));
    };
    
    return(
        <div className="paginacion">
            <button onClick={previusPage}>Ant</button>
            {
              page.map((value) =>{
                return(
                  <button
                  className={pagina === value ? 'active': ''} 
                  onClick={onChange} value={value}>{value}</button>
                )
              })
            }
            <button onClick={nextPage}>Seg</button>
        </div>
    )
}