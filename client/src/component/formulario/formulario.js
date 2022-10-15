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
        name:"",
        difficulty:"",
        duration: "",
        season: "",
        countryID: []
    })
    const [name, setName] = useState({campo: '', valido: null});
    const [duration, setDuration] = useState({campo: '', valido: null});
    const [countryID, setCountryID] = useState({campo: [], valido: null});

    const expresiones = {
		name: /^[a-zA-ZÀ-ÿ\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
		duration: /^\d{1,3}$/ // 1 a 3 numeros.
	}
    

    useEffect(() => {
        if(id !== "Add"){
            setState({
                ...state,
                countryID: state.countryID.concat(id)
            })
        }
        dispatch(getCountries())
    }, [dispatch])

    
    const handlerOnSubmit = (event) =>{
        event.preventDefault()
        console.log('Se envio el formulario')
        dispatch(addActivity(state))
    }

    const verificar = () =>{
        if (state.name !== ''){
            document.getElementById('ocultar').style.display = 'none';
        }else{
            document.getElementById('ocultar').style.display = 'block';
        }
    }


    const handleChange = (e) =>{
        verificar()
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleSelect = (e) =>{
        if (!state.countryID.includes(e.target.value))
        setState({
            ...state,
            countryID: state.countryID.concat(e.target.value)
        })
    };

    const onChangeDelete = (e) =>{
        setState({
            ...state,
            countryID: state.countryID.filter(event =>{
               return event !== e.target.value
            }),
        })

    }

    return(
        <div className="formulario">
            <div className="botonesRegreso">
                <a className="regreso" href="javascript:history.back()">
                    <button>
                        Volver Atrás    
                    </button> 
                </a>
                <Link to='/countries'>
                    <button className="regreso1">
                        Inicio
                    </button>
                </Link>

            </div>

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
                        <option value="---">Select difficulty</option>
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
                        <option value="---">Season</option>
                        <option value='Verano'>Verano</option>
                        <option value='Otoño'>Otoño</option>
                        <option value='Invierno'>Invierno</option>
                        <option value='Primavera'>Primavera</option>
                    </select>
                </div>
                <div className="select">
                    <label>Country:</label>
                    <select onChange={handleSelect} value={state.countryID}>
                        <option>Select country:</option>
                            {
                                countries?.map(pais=>(
                                    <option value={pais.name}>{pais.name}</option>
                                ))
                            }
                    </select>
                </div>
                <div className="agregar">
                    <button>Add activity</button>
                </div>

            </form>
            <div className=" pais">
                {
                state?.countryID.map( pais => (
                    <button value={pais} onClick={onChangeDelete}>
                        {pais}
                    </button>
                ))}
            </div>
        </div>
    )
}