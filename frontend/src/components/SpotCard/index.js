import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { currentUserSpotsModal } from '../../store/modal';
import { randomNumber } from '../../utils/randomNumber';
import * as spotActions from '../../store/spots';

import './SpotCard.css';

export default function SpotCard({ spot }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const added = (spot.createdAt)

  useEffect(() => {
    // dispatch(spotActions.getSpots());
  }, [dispatch, spot.id, spot.avgRating]);

  const handleRedirect = e => {
    e.preventDefault();

    dispatch(currentUserSpotsModal(false));
    dispatch(spotActions.getSpot(spot.id));
    history.push(`/spots/${spot.id}`);
  };

  return (
    <>
      {spot && (
        <div
          onClick={handleRedirect}
          className='spot-card'
        >
          <div
            className='spot-card-img'
            style={{ backgroundImage: `url('${spot.previewImage}')` }}
          ></div>

          <div className='spot-text-container'>
            <div className='top-row'>
              {spot.city}, {spot.state}
              <span className='rating-icon'>
                <i className='fas fa-star' />
                <span> {spot.avgRating ? spot.avgRating : 'New'}</span>
              </span>
            </div>
            <div>
              <div className='distance'>{randomNumber(500)} miles away</div>
              <span className='bold'>$</span>
              <span className='bold'>{spot.price}</span>
              <span> night</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
