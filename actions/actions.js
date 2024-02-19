import axios from 'axios';

export const fetchContinents = () => {
    return async (dispatch) => {
        const response = await axios.get('https://fakeapi.com/continents');
        const continents = response.data;

        dispatch({
            type: FETCH_CONTINENTS,
            payload: continents,
        });
    };
};

export const addCountry = (continentCode, countryData) => {
    return {
        type: ADD_COUNTRY,
        payload: {
            continentCode,
            countryData,
        },
    };
};

export const updatePopulation = (continentCode, countryName, population) => {
    return {
        type: UPDATE_POPULATION,
        payload: {
            continentCode,
            countryName,
            population,
        },
    };
};