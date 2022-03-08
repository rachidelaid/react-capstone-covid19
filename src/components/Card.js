import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import '../styles/card.css';

const Card = ({ name, count, action }) => {
  const map = useRef('');
  const getMap = async () => {
    const resp = await fetch(
      `https://raw.githubusercontent.com/rachidelaid/worldMaps/main/maps/${
        name.toLowerCase() === 'americas' ? 'america' : name.toLowerCase()
      }/vector.svg`,
    );
    const svg = await resp.text();
    map.current.innerHTML = svg;
  };

  useEffect(() => {
    getMap();
  }, []);
  return (
    <div className={`region ${name}`} key={name}>
      <div ref={map} className="map" />
      <div>
        <p className="title">{name}</p>
        <small>{`${count} countries`}</small>
      </div>
      {action && (
        <svg className="icon" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M20.03 12C20.03 7.59 16.41 3.97 12 3.97C7.59 3.97 3.97 7.59 3.97 12C3.97 16.41 7.59 20.03 12 20.03C16.41 20.03 20.03 16.41 20.03 12M22 12C22 17.54 17.54 22 12 22C6.46 22 2 17.54 2 12C2 6.46 6.46 2 12 2C17.54 2 22 6.46 22 12M13.54 13V16L17.5 12L13.54 8V11H6.5V13"
          />
        </svg>
      )}
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  action: PropTypes.bool.isRequired,
};

export default Card;
