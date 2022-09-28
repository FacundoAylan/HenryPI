
import {GET_COUNTRIES,
     GET_COUNTRIES_NAME,
      SEARCH_COUNTRIES,
      FILTER_BY_CONTINENT,
      SET_SORT,
      ORDER_BY_POPULATION,
      ADD_ACTIVITY,
      GET_ACTIVITIES,
      ORDER_BY_ACTIVITY,
      DETAIL
    } from "../actions/index";

const initialState = {
    countries: [],
    allCountries: [],
    activities: [],
    detail: [],
    continentFilter: []
};

export const rootReducer = (state = initialState, action) =>{

    switch (action.type){

        case GET_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload,
                countries: action.payload
            }

        case GET_COUNTRIES_NAME:
            return {
                ...state,
                countries: action.payload
            };
        case SEARCH_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        case FILTER_BY_CONTINENT:
            const allCountries =state.allCountries;
            const continentFilter= action.payload === 'All'? allCountries : allCountries.filter((country) => country.continente === action.payload)
            return{
                ...state,
                countries: continentFilter,
            }
        case SET_SORT:
            let orderCountriesByName = action.payload === "true" ? state.countries.sort((a, b) => {
                    return a.name.localeCompare(b.name);}):
                    state.countries.sort((a,b)=>{
                        return b.name.localeCompare(a.name);
                    })

            return {
                ...state,
                countries: orderCountriesByName
            }
        case ORDER_BY_POPULATION:

            let orderCountriesByPopulation = action.payload === "true" ? state.countries.sort((a, b)=>{
                if (a.poblacion < b.poblacion) {
                    return -1;
                }
                if (a.poblacion > b.poblacion) {
                    return 1;
                }
                return 0;
            }) :
                state.countries.sort((a, b) => {
                    if (a.poblacion < b.poblacion) {
                        return 1;
                    }
                    if (a.poblacion > b.poblacion) {
                        return -1;
                    }
                    return 0;
                })

            return {
                ...state,
                countries: orderCountriesByPopulation
            }
        case ADD_ACTIVITY:
            return{
                ...state,
                activities: action.payload
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
        }
                
        case ORDER_BY_ACTIVITY:
            const filter = action.payload !== "Activity" ? state.allCountries.filter((c)=>{ return c.activities.some((a)=> a.name === action.payload)})
            : state.allCountries;
            return{
                ...state,
                countries: filter
            }
        case DETAIL:
            return{
                ...state,
                detail: action.payload
            }

        default:
        return state;
    }
}