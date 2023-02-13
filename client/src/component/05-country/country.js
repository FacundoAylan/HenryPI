import React from 'react';
import './inicio.css'

export const Country = ({name, imagen, continente}) => {
        return(
            <div class="card" >
                <img src={imagen} class="img card-img-top img-fluid" alt="..."/>
                <div class="card-body text-center">
                    <p class="card-title">{name}</p>
                    <p class="card-text">{continente}</p>
                    <a href="#" class="buttondetail sticky-bottom btn btn-primary">Detail</a>
                </div>
            </div>

        )
    
};
