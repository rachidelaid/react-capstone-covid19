const SAVE_TOTAL = 'covid/SAVE_TOTAL';
const COUNTRY_DATA = 'covid/COUNTRY_DATA';

export const AddTotal = (payload) => ({
  type: SAVE_TOTAL,
  payload,
});

export const AddForCountry = (payload) => ({
  type: COUNTRY_DATA,
  payload,
});

export const fetchCovid = (date, country = 'c') => (dispatch) => fetch(
  `https://api.covid19tracking.narrativa.com/api/${date}/country/${country}`,
)
  .then((response) => response.json())
  .then((data) => {
    dispatch({
      type: SAVE_TOTAL,
      payload: data.total,
    });
    if (country !== 'c') {
      dispatch({
        type: COUNTRY_DATA,
        payload: data.dates[date].countries[country],
      });
    }
  });

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TOTAL:
      return { ...state, total: action.payload };
    case COUNTRY_DATA:
      return { ...state, country: action.payload };
    default:
      return state;
  }
};

export default reducer;
