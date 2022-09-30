import React, { useEffect, useState } from "react";
import './paginacion.css'

export const Paginacion1 = ({pagina, setPagina, maximo}) =>{

    const[botones, setBotones] = useState([])

    const page = [];

    for(let i=1;i<=maximo;i++){
      page.push(i)
    }
    
    useEffect(() => {

      let botonesPorPagina= [...page];

      if (pagina >=1 && pagina<=5 && maximo >6){
       botonesPorPagina = [1,2,3,4,5,'...'];
      }
      else if(pagina >5 && pagina<=10 && maximo >6){
        const sliced = botonesPorPagina.slice(5, 10)
        botonesPorPagina = ['...',...sliced,'...']
      }
      else if(pagina >9 && pagina<=15 && maximo >6){
        const sliced = botonesPorPagina.slice(10, 15)
        botonesPorPagina = ['...',...sliced,'...']
      }
      else if(pagina >14 && pagina<=20 && maximo >6){
        const sliced = botonesPorPagina.slice(15, 20)
        botonesPorPagina = ['...',...sliced,'...']
      }
      else if(pagina >19 && pagina<=25 && maximo >6){
        const sliced = botonesPorPagina.slice(20, 25)
        botonesPorPagina = ['...',...sliced,'...']
      }

      setBotones(botonesPorPagina)

    }, [botones])



    const nextPage = () =>{

      if (pagina >= maximo){
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
              botones.map((value) =>{
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