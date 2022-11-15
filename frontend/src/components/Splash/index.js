import { useSelector } from 'react-redux';
import SpotCard from '../SpotCard';
import './AllSpots.css';

export default function Splash() {
  const spots = useSelector(state => state.spots.spots);

  return (
    <div className='splash-container'>
      {spots &&
        Object.values(spots).map((spot, idx) => (
          <SpotCard key={idx} spot={spot}/>
        ))}
    </div>
  );
}
