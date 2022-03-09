import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import '../styles/region.css';

import Card from '../components/Card';
import Nav from '../components/Nav';

const Region = () => {
  const { id } = useParams();
  const countries = useSelector(
    ({ countriesReducer }) => countriesReducer,
  ).filter((c) => c.region.toLowerCase() === id);

  return (
    <>
      <Nav title={id} link="/" />
      <div className="region-page">
        <Card name={id} action={false} code="" />
        <p className="split">STATS BY COUNTRY</p>
        <div className="list">
          {[...Array(Math.ceil(countries.length / 2)).keys()].map((index) => (
            <div className="row" key={`key-${index}`}>
              <Link to={`/country/${countries[index * 2].code.toLowerCase()}`}>
                <Card
                  name={countries[index * 2].name.common}
                  code={countries[index * 2].code}
                  action
                />
              </Link>
              {countries[index * 2 + 1] ? (
                <Link
                  to={`/country/${countries[index * 2 + 1].code.toLowerCase()}`}
                >
                  <Card
                    name={countries[index * 2 + 1].name.common}
                    code={countries[index * 2 + 1].code}
                    action
                  />
                </Link>
              ) : (
                <div />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Region;
