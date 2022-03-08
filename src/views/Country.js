import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCovid } from '../redux/covid';
import '../styles/country.css';

import Card from '../components/Card';
import Spinner from '../components/Spinner';

const Country = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const covid = useSelector(({ covidReducer }) => covidReducer);
  const name = useSelector(({ countriesReducer }) => countriesReducer).find(
    (c) => c.code.toLowerCase() === id,
  ).name.common;

  const date = new Date();
  const today = `${date.getFullYear()}-${
    date.getMonth() + 1 > 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
  }-${date.getDate() > 10 ? date.getDate() : `0${date.getDate()}`}`;

  useEffect(() => {
    if (!covid.total) {
      dispatch(fetchCovid(today, name));
    }
  }, []);

  return (
    <div className="country-page">
      <Card name={name} code={id} action={false} />
      <p className="split">STATS BY COUNTRY</p>
      {!covid.country ? (
        <Spinner />
      ) : (
        <div className="list">
          <div className="section">
            <h4>Today Confirmed</h4>
            <p>{covid.country.today_confirmed}</p>
          </div>
          <div className="section">
            <h4>Yesterday Confirmed</h4>
            <p>{covid.country.yesterday_confirmed}</p>
          </div>
          <div className="section">
            <h4>Today Deaths</h4>
            <p>{covid.country.today_deaths}</p>
          </div>
          <div className="section">
            <h4>Yesterday Deaths</h4>
            <p>{covid.country.yesterday_deaths}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Country;
