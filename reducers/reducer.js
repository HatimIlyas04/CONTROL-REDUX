const initialState = {
    continents: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CONTINENTS:
            return {
                ...state,
                continents: action.payload,
            };
        case ADD_COUNTRY:
            const continentToAdd = state.continents.find(continent => continent.code == action.payload.continentCode);
            continentToAdd.countries.push(action.payload.countryData);
            return state;
        case UPDATE_POPULATION:
            const continentToUpdate = state.continents.find(continent => continent.code == action.payload.continentCode);
            const countryToUpdate = continentToUpdate.countries.find(country => country.name == action.payload.countryName);
            countryToUpdate.population = action.payload.population;
            return state;
        default:
            return state;
    }
};

export default reducer