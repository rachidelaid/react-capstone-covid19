import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import Hero from '../components/Hero';
import Card from '../components/Card';

const Home = () => {
  const countries = useSelector(({ countriesReducer }) => countriesReducer);
  const arr = [...new Set(countries.map((c) => c.region))].sort();

  return (
    <div className="home">
      <Hero />
      <p className="split">Regions</p>
      <div className="stats">
        <div>
          <p className="title">test</p>
          <small>15</small>
        </div>
        <div>
          <p className="title">test</p>
          <small>15</small>
        </div>
        <div>
          <p className="title">test</p>
          <small>15</small>
        </div>
        <div>
          <p className="title">test</p>
          <small>15</small>
        </div>
      </div>
      <div className="regions">
        {arr.map((region) => (
          <Link key={region} to={`/region/${region.toLocaleLowerCase()}`}>
            <Card name={region} code="" action />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Home;
