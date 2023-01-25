import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import * as spotActions from '../../store/spots';
import * as reviewActions from '../../store/reviews';
import * as bookingActions from '../../store/bookings';
import { randomNumber } from '../../utils/randomNumber';
import BookingDetails from '../BookingDetails';
import SpotReviews from '../SpotReviews';

import { faker } from '@faker-js/faker';
import { HiOutlineKey } from 'react-icons/hi';
import { CiMedal } from 'react-icons/ci';
import { AiOutlineCalendar } from 'react-icons/ai';
import './SpotDetail.css';

export default function SpotDetail() {
  const dispatch = useDispatch();
  const { spotId } = useParams();
  const spot = useSelector(state => state.spots.spotDetail);
  const spotReviews = useSelector(state => state.reviews.spotReviews);

  useEffect(() => {
    dispatch(spotActions.getSpot(spotId));
    dispatch(reviewActions.getReviews(spotId));
    dispatch(bookingActions.getBookings(spotId));
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
                <Link
                  to='/feature-not-found'
                  className='reviews-text'
                >
                  {spot.numReviews} reviews
                </Link>
                {' - '}
                <Link
                  to='/feature-not-found'
                  className='location-text'
                >
                  {' '}
                  {spot.city}, {spot.state}, {spot.country}
                </Link>
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
                  style={{
                    backgroundImage: spot.SpotImages[1]
                      ? `url(${spot.SpotImages[1]?.url})`
                      : `url('https://mytrailcreek.com/wp-content/plugins/epl-advanced-mapping/images/no-image.jpg')`
                  }}
                ></div>
                <div
                  className='img2'
                  style={{
                    backgroundImage: spot.SpotImages[2]
                      ? `url(${spot.SpotImages[2]?.url})`
                      : `url('https://mytrailcreek.com/wp-content/plugins/epl-advanced-mapping/images/no-image.jpg')`
                  }}
                ></div>
                <div
                  className='img3'
                  style={{
                    backgroundImage: spot.SpotImages[3]
                      ? `url(${spot.SpotImages[3]?.url})`
                      : `url('https://mytrailcreek.com/wp-content/plugins/epl-advanced-mapping/images/no-image.jpg')`
                  }}
                ></div>
                <div
                  className='img4'
                  style={{
                    backgroundImage: spot.SpotImages[4]
                      ? `url(${spot.SpotImages[4]?.url})`
                      : `url('https://mytrailcreek.com/wp-content/plugins/epl-advanced-mapping/images/no-image.jpg')`
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div className='details-container'>
            <div className='details-sizing-container'>
              <div className='spot-details-container'>
                <header className='spot-details-header'>
                  <div>
                    <h2 className='main-text bold'>Entire home hosted by {spot.Owner.firstName}</h2>
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

                <div className='host-checkin-cancel'>
                  <div className='host-info'>
                    <div className='host-icon'>
                      <CiMedal size={30} />
                    </div>
                    <div>
                      <span className='host bold'>{spot.Owner.firstName} is a superhost</span>
                      <p className='host-disclaimer'>
                        Superhosts would probably be experienced, if they were hosting on a site where you could
                        actually rent a place.
                      </p>
                    </div>
                  </div>
                  <div className='check-in-info'>
                    <div className='check-in-icon'>
                      <HiOutlineKey size={30} />
                    </div>
                    <div>
                      <span className='check-in bold'> Great check-in experience</span>
                      <p className='check-in-disclaimer'>
                        {randomNumber(100)}% of guests gave the check-in process a {randomNumber(5)}-star rating.
                      </p>
                    </div>
                  </div>
                  <div className='cancel-info'>
                    <div className='cancel-icon'>
                      <AiOutlineCalendar size={30} />
                    </div>
                    <div>
                      <span className='cancel bold'>Free cancellation for {randomNumber(72)} hours</span>
                      <p className='cancel-disclaimer'>
                        If you could actually book this place, you would have that many hours to cancel.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='fake-coverage-container'>
                  <div className='coverage-title'>
                    <span className='coverage-black'>clean</span>
                    <span className='coverage-red'>fee</span>
                    <span className='coverage-black'>cover</span>
                  </div>
                  <p className='coverage-text'>
                    We don't provide coverage for anything because if you actually manage to book through this website
                    somehow, you've already won...
                  </p>
                </div>
              </div>
              <div className='booking-details-container'>
                <div className='booking-details-component'>
                  <BookingDetails spot={spot} />
                </div>
              </div>
            </div>
            <div className='reviews-container'>
              <SpotReviews
                spot={spot}
                spotReviews={spotReviews}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
