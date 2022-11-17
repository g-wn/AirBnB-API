import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as spotActions from '../../store/spots';

import { faker } from '@faker-js/faker';
import './SpotDetail.css';

export default function SpotDetail() {
  const dispatch = useDispatch();
  const spot = useSelector(state => state.spots.spotDetail);
  const { spotId } = useParams();

  const randomNumber = num => {
    return Math.floor(Math.random() * num);
  };

  useEffect(() => {
    dispatch(spotActions.getSpot(spotId));
  }, [spotId, dispatch]);

  return (
    <>
      {spot && (
        <>
          <div className='spot-overview-container'>
            <header className='spot-header'>
              <h1 className='spot-header-h1'>{spot.name}</h1>
              <div className='spot-stats'>
                <i className='fas fa-star' />
                <span> {spot.avgStarRating} - </span>
                <span className='reviews-text'>{spot.numReviews} reviews</span>
                {' - '}
                <span className='location-text'>
                  {' '}
                  {spot.city}, {spot.state}, {spot.country}
                </span>
              </div>
            </header>
            <div className='img-container'>
              <div
                className='preview-img'
                style={{ backgroundImage: `url(${spot.SpotImages.find(image => image.preview === true)?.url})` }}
              ></div>
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

          <div className='details-container'>
            <div className='spot-details-container'>
              <header className='spot-details-header'>
                <div>
                  <h2 className='main-text bold'>Entire home hosted by {faker.name.firstName()}</h2>
                  <p className='spot-info'>
                    {randomNumber(15)} guests - {randomNumber(10)} bedrooms - {randomNumber(10)} beds -{' '}
                    {randomNumber(8)} baths
                  </p>
                </div>
                <div className='host-avatar-img-container'>
                  <img
                    src={faker.image.avatar()}
                    alt=''
                    className='host-avatar-img'
                  />
                </div>
              </header>

              <div className="host-checkin-cancel">
                <div className='host-info'></div>
                <div className='check-in-info'></div>
                <div className='cancel-info'></div>
              </div>
            </div>
            <div className='booking-details-container'></div>
          </div>
        </>
      )}
    </>
  );
}
