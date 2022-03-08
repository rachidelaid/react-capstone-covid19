import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Card from '../components/Card';

const Country = () => {
  const { id } = useParams();
  const name = useSelector(({ countriesReducer }) => countriesReducer).find(
    (c) => c.code.toLowerCase() === id,
  ).name.common;

  return (
    <div className="country-page">
      <Card name={name} code={id} action={false} />
      <p className="split">STATS BY CITIES</p>
      <div className="list" />
    </div>
  );
};

export default Country;
