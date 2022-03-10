import '../styles/hero.css';

const Hero = () => {
  const date = new Date();
  const today = `${date.getFullYear()}-${
    date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
  }-${date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`}`;

  return (
    <div className="hero-wrapper">
      <div className="hero">
        <div className="content">
          <h2>{today}</h2>
          <p>STATS</p>
        </div>

        <svg viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M20.03 12C20.03 7.59 16.41 3.97 12 3.97C7.59 3.97 3.97 7.59 3.97 12C3.97 16.41 7.59 20.03 12 20.03C16.41 20.03 20.03 16.41 20.03 12M22 12C22 17.54 17.54 22 12 22C6.46 22 2 17.54 2 12C2 6.46 6.46 2 12 2C17.54 2 22 6.46 22 12M13.54 13V16L17.5 12L13.54 8V11H6.5V13"
          />
        </svg>
      </div>
    </div>
  );
};
export default Hero;
