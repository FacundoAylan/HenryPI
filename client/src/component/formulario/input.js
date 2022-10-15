import React from "react";
import { useState } from "react";
import { VscPass } from "react-icons/vsc";
import { TiDeleteOutline } from "react-icons/ti";
import './input.css'


export const Input = ({status,statusChange,type,label,placeholder,name,errorMessage,expression}) =>{

    const [error, setError] = useState(false);

    const onChange = (e) =>{
        statusChange({...status , campo: e.target.value})
    };
    const validacion = () => {
        if(expression.test(status.campo)){
            statusChange({...status, valido: true});
            setError(true);
        } else {
            statusChange({...status, valido: false});
            setError(false)
        }
    };

    return(
        <div className="exit">
            <input
                type= {type}
                placeholder= {placeholder}
                value= {status.name}
                onChange = {onChange}
                onKeyUp={validacion}
                onBlur={validacion}
            
            />
            { status.valido === true ? <VscPass className="true"/>: <TiDeleteOutline className="false"/>}
            <h5 className={error === false ? 'active': 'disabled'}>{errorMessage}</h5>
        </div>
    )
};