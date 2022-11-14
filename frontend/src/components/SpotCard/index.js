import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as spotActions from '../../store/spots';


import './SpotCard.css';

export default function SpotCard({ spot }) {
  const history = useHistory()
  const dispatch = useDispatch()

  const handleRedirect = e => {
    e.preventDefault()

    dispatch(spotActions.getSpot(spot.id))
    history.push(`/spots/${spot.id}`)
  }

  return (
    <div onClick={handleRedirect} className='spot-card'>
      <img
        src='https://a0.muscache.com/im/pictures/66526778/a45cd4a4_original.jpg?im_w=720'
        alt='previewImage'
      />
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
