import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as spotActions from '../../store/spots';

import './SpotDetail.css';

export default function SpotDetail() {
  const dispatch = useDispatch();
  const spot = useSelector(state => state.spots.spot);
  const { spotId } = useParams();

  useEffect(() => {
    dispatch(spotActions.getSpot(spotId));
  }, [spotId, dispatch]);

  return (
    <>
      {spot && (
        <div className='spot-detail-container'>
          <div className='spot-header'>
            <h1>{spot.name}</h1>
            <div className='spot-stats'>
              <i className='fas fa-star' />
              <span> {spot.avgStarRating}</span>
              <span> - {spot.numReviews} reviews</span>
              <span>
                {' '}
                - {spot.city}, {spot.state}, {spot.country}
              </span>
            </div>
          </div>
          <div className='img-container'>
            <img
              src='https://a0.muscache.com/im/pictures/66526778/a45cd4a4_original.jpg?im_w=720'
              alt='previewImage'
              className='preview-img'
            />
            {Object.values(spot.SpotImages).filter(img => img.preview === false).map((img, idx) => (
              <img key={idx} src={`${img.url}`} alt={`spotImage ${idx}`}></img>
            ))}
          </div>
          .
        </div>
      )}
    </>
  );
}
