import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Nav from '../components/Nav';

const Home = () => {
  const countries = useSelector(({ countriesReducer }) => countriesReducer);
  const covid = useSelector(({ covidReducer }) => covidReducer);
  const arr = [...new Set(countries.map((c) => c.region))].sort();

  return (
    <>
      <Nav title="today's status" link="/" />
      <div className="home">
        <div className="headline">
          <Hero />
          <div className="stats-wrap">
            <p className="split">TOTAL STATS</p>
            <div className="stats">
              <div>
                <p className="title">Today Confirmed</p>
                <small>{covid.total.today_confirmed}</small>
              </div>
              <div>
                <p className="title">Today Deaths</p>
                <small>{covid.total.today_deaths}</small>
              </div>
              <div>
                <p className="title">Yesterday Confirmed</p>
                <small>{covid.total.yesterday_confirmed}</small>
              </div>
              <div>
                <p className="title">Yesterday Deaths</p>
                <small>{covid.total.yesterday_deaths}</small>
              </div>
            </div>
          </div>
        </div>
        <p className="split region-split">SELECT BY REGION</p>
        <div className="regions">
          {arr.map((region) => (
            <Link
              key={region}
              data-testid={region}
              to={`/region/${region.toLocaleLowerCase()}`}
            >
              <Card name={region} code="" action />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;
