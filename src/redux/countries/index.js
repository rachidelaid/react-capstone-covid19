const ADD_COUNTRIES = 'coutries/ADD_COUNTRIES';

export const AddAllCountries = (payload) => ({
  type: ADD_COUNTRIES,
  payload,
});

export const fetchCountries = () => (dispatch) => fetch('https://restcountries.com/v3.1/all')
  .then((response) => response.json())
  .then((data) => {
    dispatch({
      type: ADD_COUNTRIES,
      payload: data.map((c) => ({
        name: c.name,
        region: c.region,
        code: c.cca2,
      })),
    });
  });

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTRIES:
      return action.payload.filter((c) => c.code !== 'IL');
    default:
      return state;
  }
};

export default reducer;
