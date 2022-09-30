import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { getCountries, addActivity } from "../../redux/actions";
import { useParams } from "react-router-dom";
import './formulario.css'

export const Formulario = () => {

    const {id} =useParams()

    const dispatch = useDispatch();

    const countries =useSelector(state => state.allCountries)
    const [regreso, setRegreso] = useState(false);

    const [state, setState] = useState({
        name:"",
        difficulty:"",
        duration: "",
        season: "",
        countryID: []
    })
    
    
    useEffect(() => {
        if(id !== "Add"){
            setState({
                ...state,
                countryID: state.countryID.concat(id)
            })
            setRegreso(true)
        }
        dispatch(getCountries())
    }, [dispatch])

    
    const handlerOnSubmit = () =>{
        if(state.name !=="" && state.difficulty!=="" && state.duration!=="" && state.season!=="" && state.countryID.length!==0){
            dispatch(addActivity(state))
        }
    }
    const handleChange = (e) =>{
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

            <form onSubmit={handlerOnSubmit}>
                <div>
                    <label>Name:</label>
                    <input  name="name" value={state.name}  onChange={handleChange}></input>
                </div>
                <div>
                    <label>Duracion (minutes):</label>
                    <input name="duration"  value={state.duration} onChange={handleChange} ></input>
                </div>
                <div>
                    <label>Dificultad:</label>
                    <select name="difficulty" onChange={handleChange}>
                        <option value="---">Select difficulty</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
                <div>
                    <label>Temporada:</label>
                    <select name ="season" onChange={handleChange}>
                        <option value="---">Temporada</option>
                        <option value='Verano'>Verano</option>
                        <option value='Otoño'>Otoño</option>
                        <option value='Invierno'>Invierno</option>
                        <option value='Primavera'>Primavera</option>
                    </select>
                </div>
                <div>
                    <label>Paises:</label>
                    <select onChange={handleSelect} value={state.countryID}>
                        <option>Selecion el pais</option>
                            {
                                countries?.map(pais=>(
                                    <option value={pais.name}>{pais.name}</option>
                                ))
                            }
                    </select>
                </div>
                <div className="agregar">
                    <button>Agregar Actividad</button>
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