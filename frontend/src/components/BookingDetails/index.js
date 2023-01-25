import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as bookingActions from '../../store/bookings';
import * as spotActions from '../../store/spots';
import { AiFillStar } from 'react-icons/ai';
import './BookingDetails.css';

export default function BookingDetails({ spot }) {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState('2023-04-03');
  const [endDate, setEndDate] = useState('2023-04-10');
  const [errors, setErrors] = useState([]);

  const handleBooking = async e => {
    e.preventDefault();
    setErrors([]);

    const newBooking = {
      startDate,
      endDate
    };

    return await dispatch(bookingActions.postBooking(spot.id, newBooking))
      .then(async res => {
        if (res.ok) {
          dispatch(spotActions.getSpot(spot.id));
        }
      })
      .catch(async res => {
        const data = await res.json();
        if (data && data.message) setErrors(data.errors ? Object.values(data.errors) : [data.message]);
      });
  };

  return (
    <div className='booking-details-component-container'>
      {errors.length > 0 ? (
        <header className='booking-details-header-errors'>
          {errors.map((error, idx) => (
            <div
              className='booking-error'
              key={idx}
            >
              {error}
            </div>
          ))}
        </header>
      ) : (
        <header className='booking-details-header'>
          <div>
            <span className='spot-price bold'>${spot.price} </span>
            <span>night</span>
          </div>
          <div className='booking-details-component-reviews'>
            <span>
              <AiFillStar size={20} />
            </span>
            <span>{spot.avgStarRating} - </span>
            <Link
              to='/feature-not-found'
              className='booking-details-component-numreviews'
            >
              {spot.numReviews} reviews
            </Link>
          </div>
        </header>
      )}
      <form
        onSubmit={handleBooking}
        className='date-guest-select-container'
      >
        <div className='date-guest-top'>
          <div className='date-guest-top-left'>
            <p className='check-in bold'>CHECK-IN</p>
            <input
              className='date-input'
              type='date'
              onChange={e => setStartDate(e.target.value)}
              value={startDate}
            />
          </div>
          <div className='date-guest-top-right'>
            <p className='check-out bold'>CHECK-OUT</p>
            <input
              className='date-input'
              type='date'
              onChange={e => setEndDate(e.target.value)}
              value={endDate}
            />
          </div>
        </div>
        <div className='date-guest-btm'>
          <select className='date-guest-btm-select'>
            <option value={1}>1 guest</option>
            <option value={2}>2 guests</option>
            <option value={3}>3 guests</option>
            <option value={4}>4 guests</option>
            <option value={5}>5 guests</option>
            <option value={6}>6 guests</option>
            <option value={7}>7 guests</option>
            <option value={8}>8 guests</option>
            <option value={9}>9 guests</option>
            <option value={10}>10 guests</option>
            <option value={11}>11 guests</option>
            <option value={12}>12 guests</option>
            <option value={13}>13 guests</option>
            <option value={14}>14 guests</option>
            <option value={15}>15 guests</option>
          </select>
        </div>
        <button
          type='submit'
          className='reserve-btn bold'
        >
          This ain't no button
        </button>
      </form>

      <p className='no-charge-disclaimer'>You won't be charged yet. Or ever.</p>

      <div className='price-breakdown-container'>
        <p className='nightly-price'>
          <Link
            to='/feature-not-found'
            className='price-breakdown-left'
          >
            ${spot.price} x 5 nights
          </Link>
          <span>${spot.price * 5}</span>
        </p>
        <p className='cleaning-fee'>
          <Link
            to='/feature-not-found'
            className='price-breakdown-left'
          >
            Cleaning fee
          </Link>
          <span>$LOL</span>
        </p>
        <p className='service-fee'>
          <Link
            to='/feature-not-found'
            className='price-breakdown-left'
          >
            Service Fee
          </Link>
          <span>$Nope</span>
        </p>
      </div>

      <p className='total-price bold'>
        <span>Total before taxes</span>
        <span>$0,000</span>
      </p>

      <p className='price-disclaimer'>Don't you get it by now? This site can't charge you money... Ever.</p>
    </div>
  );
}
