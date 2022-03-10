import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCovid } from '../redux/covid';
import '../styles/country.css';

import Card from '../components/Card';
import Spinner from '../components/Spinner';
import Nav from '../components/Nav';

const Country = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const covid = useSelector(({ covidReducer }) => covidReducer);
  const { name, region } = useSelector(
    ({ countriesReducer }) => countriesReducer,
  ).find((c) => c.code.toLowerCase() === id);

  const date = new Date();
  const today = `${date.getFullYear()}-${
    date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
  }-${date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`}`;

  useEffect(() => {
    if (!covid.country) {
      dispatch(fetchCovid(today, id === 'us' ? 'US' : name.common));
    }
  }, []);

  return (
    <>
      <Nav title={name.common} link={`/region/${region.toLowerCase()}`} />
      <div className="country-page" data-testid="country">
        <Card name={name.common} code={id} action={false} />
        <p className="split">STATS BY COUNTRY</p>
        {!covid.country ? (
          <Spinner />
        ) : (
          <div className="list">
            <div className="section light">
              <h3>Today Confirmed</h3>
              <p>{covid.country.today_confirmed}</p>
            </div>
            <div className="section">
              <h3>Yesterday Confirmed</h3>
              <p>{covid.country.yesterday_confirmed}</p>
            </div>
            <div className="section">
              <h3>Today Deaths</h3>
              <p>{covid.country.today_deaths}</p>
            </div>
            <div className="section light">
              <h3>Yesterday Deaths</h3>
              <p>{covid.country.yesterday_deaths}</p>
            </div>
            <div className="section light">
              <h3>Today Recovered</h3>
              <p>{covid.country.today_recovered}</p>
            </div>
            <div className="section">
              <h3>Yesterday Recovered</h3>
              <p>{covid.country.yesterday_recovered}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Country;
