import React, { useEffect, useState } from "react";
import './paginacion.css'

export const Paginacion1 = ({pagina, setPagina, maximo}) =>{
    var limit = 1;
    const pageLimit = [0];
    const page = [];

    //verificar si llego al final
    const [nextPageLimit, setPageLimit] = useState(0);
    const [previusPageLimit, setPreviusPageLimit] = useState(5);

    for(let i=1;i<=maximo;i++){
      if(limit + 5 <maximo){
        limit += 5;
        pageLimit.push(limit)
      }
      page.push(i)
    }


    const nextPage = () =>{
      if(pagina >= maximo){
        setPagina(1);
        setPageLimit(0);
        setPreviusPageLimit(5);
      }
      else if (pageLimit.includes(pagina+1)){
        setPageLimit(nextPageLimit + 5 );
        setPreviusPageLimit(previusPageLimit +5)
        setPagina(pagina+1)

      }else{
        setPagina(pagina+1);
    }

    };
    const previusPage = () =>{
      setPagina(pagina-1);
        if(pagina <= 1){
            setPagina(maximo);
            setPageLimit(maximo-5);
            setPreviusPageLimit(maximo);
        }
        else if (pageLimit.includes(pagina)){
          setPageLimit(nextPageLimit - 5 );
          setPreviusPageLimit(previusPageLimit -5)
          setPagina(pagina-1)
        }
    };
    
    const onChange = (e) => {
      setPagina (Number(e.target.value));
    };
    return(
        <div className="paginacion">
            <button onClick={previusPage}>Ant</button>
            {
              page.slice(nextPageLimit,previusPageLimit).map((value) =>{
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