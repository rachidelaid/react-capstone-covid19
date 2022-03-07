import '../styles/home.css';
import Hero from '../components/Hero';
import Card from '../components/Card';

const Home = () => {
  const arr = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Antarctica'];

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
          <Card key={region} name={region} count={150} />
        ))}
      </div>
    </div>
  );
};
export default Home;
