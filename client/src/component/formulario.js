import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { getCountries, addActivity } from "../redux/actions";

export const Formulario = () => {
    const dispatch = useDispatch();

    const countries =useSelector(state => state.allCountries)
    const [selectCounty, setSelectCountry] = useState([])

    const [state, setState] = useState({
        name:"",
        difficulty:"",
        duration: "",
        season: "",
        countryID: []
    })
    
    
    useEffect(() => {
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
        setSelectCountry([...selectCounty, e.target.value])
    };

    const onChangeDelete = (e) =>{
        setState({
            ...state,
            countryID: state.countryID.filter(event =>{
               return event !== e.target.value
            }),
        })
        setSelectCountry(selectCounty.filter(event=>{
            return event!== e.target.value
        }))
    }
    
    return(
        <div>
            <Link to='/countries'>Back</Link>
            <form onSubmit={handlerOnSubmit}>
                <div>
                    <label>Name</label>
                    <input  name="name" value={state.name}  onChange={handleChange}></input>
                </div>
                <div>
                    <label>Duracion (minutes):</label>
                    <input name="duration"  value={state.duration} onChange={handleChange} ></input>
                </div>
                <div>
                    <label>Dificultad</label>
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
                    <label>Temporada</label>
                    <select name ="season" onChange={handleChange}>
                        <option value="---">Temporada</option>
                        <option value="Summer">Verano</option>
                        <option value="Autumn">Otoño</option>
                        <option value="Winter">Invierno</option>
                        <option value="Spring">Primavera</option>
                    </select>
                </div>
                <div>
                    <label>Paises</label>
                    <select onChange={handleSelect} value={state.countryID}>
                        <option>Selecion el pais</option>
                            {
                                countries?.map(pais=>(
                                    <option value={pais.name}>{pais.name}</option>
                                ))
                            }
                    </select>
                </div>
                <div>
                    <button>Agregar Actividad</button>
                </div>

            </form>
            <div>
                {
                selectCounty?.map( pais => (
                    <button value={pais} onClick={onChangeDelete}>
                        {pais}
                    </button>
                ))}
            </div>
        </div>
    )
}