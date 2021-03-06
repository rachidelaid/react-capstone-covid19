import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import '../styles/card.css';

const Card = ({ name, action, code }) => {
  const countries = useSelector(({ countriesReducer }) => countriesReducer);
  const map = useRef('');

  const getCode = () => {
    if (!code) {
      return name.toLowerCase() === 'americas'
        ? 'america'
        : `${
          name.toLowerCase() === 'antarctic'
            ? 'antarctica'
            : name.toLowerCase()
        }`;
    }

    return code.toLowerCase();
  };
  const getMap = async () => {
    const link = `https://raw.githubusercontent.com/rachidelaid/worldMaps/main/maps/${getCode()}/vector.svg`;
    const resp = await fetch(link);
    const svg = await resp.text();

    if (map.current && svg.includes('svg')) {
      map.current.innerHTML = svg;
    }
  };

  useEffect(() => {
    getMap();
  }, []);
  return (
    <div
      className={`region ${!code ? name : 'country'} ${action ? '' : 'top'}`}
      key={name}
    >
      <div ref={map} className="map">
        <span>NO MAP</span>
      </div>
      <div className="details">
        <p className="title">{name}</p>
        {!code && (
          <small>
            {`${
              countries.filter(
                (c) => c.region.toLowerCase() === name.toLowerCase(),
              ).length
            } countries`}
          </small>
        )}
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
  action: PropTypes.bool.isRequired,
  code: PropTypes.string.isRequired,
};

export default Card;
