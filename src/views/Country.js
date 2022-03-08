import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCovid } from '../redux/covid';
import '../styles/country.css';

import Card from '../components/Card';

const Country = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const data = useSelector(({ covidReducer }) => covidReducer);
  const name = useSelector(({ countriesReducer }) => countriesReducer).find(
    (c) => c.code.toLowerCase() === id,
  ).name.common;

  const date = new Date();
  const today = `${date.getFullYear()}-${
    date.getMonth() + 1 > 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
  }-${date.getDate() > 10 ? date.getDate() : `0${date.getDate()}`}`;

  // console.log(data.dates[today].countries[id]);

  useEffect(() => {
    if (!data.total) {
      dispatch(fetchCovid(today, name));
    }
  }, []);

  return (
    <div className="country-page">
      <Card name={name} code={id} action={false} />
      <p className="split">STATS BY CITIES</p>
      {/* <div className="list">{data.dates[today].countries[id].regions}</div> */}
    </div>
  );
};

export default Country;
