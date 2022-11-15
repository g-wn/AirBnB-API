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
            <div
              className='preview-img'
              style={{ backgroundImage: `url(${spot.SpotImages.find(image => image.preview === true)?.url})` }}></div>
            <div className='imgs'>
              <div
                className='img1'
                style={{ backgroundImage: `url(${spot.SpotImages[1]?.url})` }}
              ></div>
              <div
                className='img2'
                style={{ backgroundImage: `url(${spot.SpotImages[2]?.url})` }}
              ></div>
              <div
                className='img3'
                style={{ backgroundImage: `url(${spot.SpotImages[3]?.url})` }}
              ></div>
              <div
                className='img4'
                style={{ backgroundImage: `url(${spot.SpotImages[4]?.url})` }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
