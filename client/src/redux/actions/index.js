import axios from "axios";

export const GET_COUNTRIES_NAME = 'GET_COUNTRIES_NAME';
export const GET_COUNTRIES = 'GET_COUNTRIES'
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES'
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT'
export const SET_SORT = 'SET_SORT';
export const ORDER_BY_POPULATION = 'ORDER_BY_POPULATION';
export const ORDER_BY_ACTIVITY = 'ORDER_BY_ACTIVITY'
export const ADD_ACTIVITY = 'ADD_ACTIVITY';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const DETAIL = 'DETAIL'

export const getCountries = () =>{
    return async (dispatch) =>{
        try{
            const json = await axios.get('http://localhost:3006/country');
            dispatch({
                type: GET_COUNTRIES,
                payload: json.data
            })
        }catch(err){
            console.log(err);
        }
    }
}

export const getCountriesName = (name) =>{
    return async (dispatch) => {
        try {
            let json = await axios.get(`http://localhost:3006/country?name=${name}`);
            dispatch({
                type: 'GET_COUNTRIES_NAME',
                payload: json.data
            });
        }catch (err) {
            alert("No se a encontrado el pais");
        }
    }
};

export const setCountriesSort = (payload) =>{
    return(
        {
            type: SET_SORT,
            payload
        }
    )
}
export const orderByPopulation = (payload) => {
    return {
        type: ORDER_BY_POPULATION,
        payload
    }
}

export const filterCountriesContinent = (payload)=>{
    return(
        {
            type: FILTER_BY_CONTINENT,
            payload
        }
    )
};

export const addActivity = (payload) =>{
    return async (dispatch) => {
        try{
            return await axios.post('http://localhost:3006/activity',payload)
        }catch(err){
            console.log(err);
        }
    }
}

export const getActivities = () => {
    return async function (dispatch) {
        try {
            let json = await axios.get('http://localhost:3006/activity');
            return dispatch({
                type: GET_ACTIVITIES,
                payload: json.data
            })
        } catch (error) {
            alert('No hay actividades')
        }
    }
}

export const orderByActivity = (payload) =>{
    return{
        type: ORDER_BY_ACTIVITY,
        payload
    }

}

export const detail= (id) => {
    return async (dispatch) => {
        try {
            var json = await axios.get(`http://localhost:3006/country/${id}`)
            return dispatch({
                type: DETAIL,
                payload: json.data
            });
        } catch (error) {
            alert('El pais no fue encontrado')
        }
    }
}