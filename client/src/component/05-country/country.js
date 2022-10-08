import React from 'react';
import './inicio.css'

export const Country = ({name, imagen, continente}) => {
        return(
            <div className="contenedorImg">
                    <img src={imagen} alt='' className='img'/>
                    <div className="capa">
                        <h1>{name}</h1>
                        <h1>{continente}</h1>
                    </div>
            </div>
        )
    
};
