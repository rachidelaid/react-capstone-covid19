import { useParams } from 'react-router-dom';
import '../styles/region.css';

import Card from '../components/Card';

const Region = () => {
  const { id } = useParams();
  return (
    <div className="region-page">
      <Card name={id} count={150} action={false} />
      <p className="split">STATS BY COUNTRY</p>
    </div>
  );
};

export default Region;
