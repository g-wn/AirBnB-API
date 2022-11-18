import { useSelector } from 'react-redux';
import SpotCard from '../SpotCard';
import './AllSpots.css';

export default function Splash() {
  const allSpots = useSelector(state => state.spots.allSpots);

  return (
    <div className='splash-container'>
      {allSpots &&
        Object.values(allSpots).map((spot, idx) => (
          <div>
            <SpotCard
              key={idx}
              spot={spot}
            />
          </div>
        ))}
    </div>
  );
}
