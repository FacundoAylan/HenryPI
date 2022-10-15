import React, { useState } from "react";
import './paginacion.css'

export const Paginacion1 = ({pagina, setPagina, maximo}) =>{
    let init = 0;
    const page = [];
    const pageLimit = [0]

    const [previusPageLimit, setPreviusPageLimit] = useState(0);
    const [nextPageLimit, setNextPage] = useState(5);

    for(let i=1;i<=maximo;i++){
      if(init <= maximo){
        init += 5;
        pageLimit.push(init)
      }
      page.push(i)
    }

    const nextPage = () =>{
      setPagina(pagina + 1);

      if(pagina >= maximo){
        setPagina(1);
        setPreviusPageLimit(0);
        setNextPage(5);
      }
      else if(pageLimit.includes(pagina)){
        setPreviusPageLimit(previusPageLimit + 5);
        setNextPage(nextPageLimit + 5);
      }


    };
    const previusPage = () =>{
      
      if(pagina <= 1){
        setPagina(maximo);
        setPreviusPageLimit(maximo - 5);
        setNextPage(maximo);
      }
      else if( pageLimit.includes(pagina -1)){
        setPreviusPageLimit(previusPageLimit - 5);
        setNextPage(nextPageLimit - 5);
        setPagina(pagina-1);
      }else{
        setPagina(pagina-1)
      }
    };
    
    const onChange = (e) => {
      setPagina (Number(e.target.value));
    };
    
    return(
        <div className="paginacion">
            <button onClick={previusPage}>Prev</button>
            {
              page.slice(previusPageLimit, nextPageLimit).map((value) =>{
                return(
                  <button
                  className={pagina === value ? 'active': ''} 
                  onClick={onChange} value={value}>{value}</button>
                )
              })
            }
            <button onClick={nextPage}>Next</button>
        </div>
    )
}