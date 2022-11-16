import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as spotActions from '../../store/spots';

import './SpotCard.css';

export default function SpotCard({ spot }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleRedirect = e => {
    e.preventDefault();

    dispatch(spotActions.getSpot(spot.id));
    history.push(`/spots/${spot.id}`);
  };

  return (
    <div
      onClick={handleRedirect}
      className='spot-card'
    >
      <div
        className='spot-card-img'
        style={{ backgroundImage: `url('${spot.previewImage}')` }}
      ></div>

      <div className='spot-text-container'>
        <div className='bold top-row'>
          {spot.city}, {spot.state}
          <span className='rating-icon'>
            <i className='fas fa-star' />
            <span> {spot.avgRating}</span>
          </span>
        </div>
        <div>
          <span className='bold'>$</span>
          <span className='bold'>{spot.price}</span>
          <span> night</span>
        </div>
      </div>
    </div>
  );
}
