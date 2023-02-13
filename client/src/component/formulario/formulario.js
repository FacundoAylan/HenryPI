import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { getCountries, addActivity } from "../../redux/actions";
import { useParams } from "react-router-dom";
import './formulario.css'
import { Input } from "./input";

export const Formulario = () => {

    const {id} =useParams()

    const dispatch = useDispatch();

    const countries =useSelector(state => state.allCountries);

    const [state, setState] = useState({
        difficulty: null,
        season: null,
    })
    const [name, setName] = useState({campo: '', valido: null});
    const [duration, setDuration] = useState({campo: '', valido: null});
    const [countryID, setCountryID] = useState({campo: [], valido: null});

    const expresiones = {
		name: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
		duration: /^\d{1,3}$/ // 1 a 3 numeros.
	}
    const button = (state.difficulty !== 'null'
                    && duration.valido!== null 
                    && state.season !== 'null' 
                    && name.valido !== null 
                    && countryID.valido !== null) ? 'buttonActive' : 'buttonDisabled'
    useEffect(() => {
        if(id !== "Add"){
            setCountryID({
                ...countryID,
                campo: countryID.campo.concat(id)
            })
        }

        dispatch(getCountries())
    }, [dispatch]);

    
    const handlerOnSubmit = (event) =>{
        event.preventDefault()
        dispatch(addActivity(state))
    };

    const handleChange = (e) =>{
            setState({
                ...state,
                [e.target.name]: e.target.value
            })
    };
    console.log(state)
    const handleSelect = (e) =>{
        if (!countryID.campo.includes(e.target.value)){
            setCountryID({
                ...countryID,
                campo: countryID.campo.concat(e.target.value),
                valido: true
            })
        }
        document.getElementById('country').selectedIndex = 0;
    };

    const onChangeDelete = (e) =>{
        let value = countryID.campo.filter(event =>{
            return event !== e.target.value
        })
        if (value.length === 0){
            countryID.valido = null;
        }
        setCountryID({
            ...countryID,
            campo: value,
        })

    }

    return(
        <div className="formulario">
            <div className="botonesRegreso">
                <a href="javascript:history.back()" className="regreso">
                    <p>
                        Black  
                    </p>
                </a>
                <Link to='/countries' className="home">
                    <p>
                        Home
                    </p>
                </Link>

            </div>
            <div className="position">
                <form onSubmit={handlerOnSubmit} className='form'>
                    <div className="name">
                        <label>Name:</label>
                        <Input
                            status= {name}
                            statusChange = {setName}
                            type="text"
                            label="name"
                            placeholder="futbol"
                            name="name" 
                            errorMessage="El nombre solo puede contener letras y espacios."
                            expression={expresiones.name}
                        />
                        
                
                    </div>
                    <div className="durati">
                        <label >Duration (minutes):</label>
                        <Input
                            status= {duration}
                            statusChange = {setDuration}
                            type="text"
                            label="Duration"
                            placeholder="120min"
                            name="Duration" 
                            errorMessage="La duracion solo puede contener numeros"
                            expression={expresiones.duration}
                        />
                    </div>
                    <div className="difficulty">
                        <label>Difficulty:</label>
                        <select name="difficulty" onChange={handleChange}>
                            <option value="null">Select difficulty</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                    </div>
                    <div className="season">
                        <label>Season:</label>
                        <select name ="season" onChange={handleChange}>
                            <option value="null">Season</option>
                            <option value='Verano'>Verano</option>
                            <option value='Otoño'>Otoño</option>
                            <option value='Invierno'>Invierno</option>
                            <option value='Primavera'>Primavera</option>
                        </select>
                    </div>
                    <div className="select">
                        <label>Country:</label>
                        <select onChange={handleSelect} value={state.countryID} id='country'>
                            <option>Select country:</option>
                                {
                                    countries?.map(pais=>(
                                        <option value={pais.name}>{pais.name}</option>
                                    ))
                                }
                        </select>
                    </div>
                    <div className={button}>
                        <button>Add activity</button>
                    </div>

                </form>
            </div>
            <div className=" pais">
                {
                countryID.campo.map( pais => (
                    <button value={pais} onClick={onChangeDelete}>
                        {pais}
                    </button>
                ))}
            </div>
        </div>
    )
}