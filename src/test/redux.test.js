import store from '../redux/config';
import { fetchCovid } from '../redux/covid';
import { fetchCountries } from '../redux/countries';

const covidData = {
  dates: {
    '2020-03-22': {
      countries: {
        Spain: {
          today_confirmed: 41263,
          today_deaths: 2146,
          today_hospitalised_patients_with_symptoms: 0,
          today_intensive_care: 2183,
          today_new_confirmed: 4630,
          today_new_deaths: 470,
          today_new_hospitalised_patients_with_symptoms: 0,
          today_new_intensive_care: 340,
          today_new_open_cases: 3692,
          today_new_recovered: 468,
          today_new_total_hospitalised_patients: 3159,
          today_open_cases: 35977,
          today_recovered: 3140,
          today_total_hospitalised_patients: 19593,
          today_vs_yesterday_confirmed: 0.12638877514809055,
          today_vs_yesterday_deaths: 0.2804295942720765,
          today_vs_yesterday_hospitalised_patients_with_symptoms: null,
          today_vs_yesterday_intensive_care: 0.18448182311448735,
          today_vs_yesterday_open_cases: 0.11435651231221922,
          today_vs_yesterday_recovered: 0.1751497005988023,
          today_vs_yesterday_total_hospitalised_patients: 0.19222343921139107,
          yesterday_confirmed: 36633,
          yesterday_deaths: 1676,
          yesterday_hospitalised_patients_with_symptoms: 0,
          yesterday_intensive_care: 1843,
          yesterday_open_cases: 32285,
          yesterday_recovered: 2672,
          yesterday_total_hospitalised_patients: 16434,
        },
      },
    },
  },
  total: {
    today_confirmed: 347629,
    today_deaths: 15038,
    today_new_confirmed: 33767,
    today_new_deaths: 1792,
    today_new_open_cases: 25693,
    today_new_recovered: 6282,
    today_open_cases: 234584,
    today_recovered: 98007,
    today_vs_yesterday_confirmed: 0.10758549935959105,
    today_vs_yesterday_deaths: 0.13528612411293972,
    today_vs_yesterday_open_cases: 0.1229971611989027,
    today_vs_yesterday_recovered: 0.06848732624693388,
    yesterday_confirmed: 313862,
    yesterday_deaths: 13246,
    yesterday_open_cases: 208891,
    yesterday_recovered: 91725,
  },
};

const countriesData = [
  {
    name: {
      common: 'Montenegro',
      official: 'Montenegro',
    },
    cca2: 'ME',
    region: 'Europe',
  },
  {
    name: {
      common: 'Tokelau',
      official: 'Tokelau',
    },
    cca2: 'TK',
    region: 'Oceania',
  },
  {
    name: {
      common: 'Cuba',
      official: 'Republic of Cuba',
    },
    cca2: 'CU',
    region: 'Americas',
  },
  {
    name: {
      common: 'Guadeloupe',
      official: 'Guadeloupe',
    },
    cca2: 'GP',
    region: 'Americas',
  },
];

global.fetch = (url) => Promise.resolve({
  json: () => Promise.resolve(
    url.includes('restcountries') ? countriesData : covidData,
  ),
});

describe('redux tests', () => {
  test('fetch covid data', async () => {
    await store.dispatch(fetchCovid('654654'));
    const { covidReducer } = store.getState();
    expect(covidReducer.total).toBeTruthy();
  });

  test('fetch countries data', async () => {
    await store.dispatch(fetchCountries('restcountries'));
    const { countriesReducer } = store.getState();
    expect(countriesReducer.length).toBe(4);
  });
});
