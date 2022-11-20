import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import './BookingDetails.css';

export default function BookingDetails({ spot }) {

  return (
    <div className='booking-details-component-container'>
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
          <Link to='/feature-not-found' className='booking-details-component-numreviews'>{spot.numReviews} reviews</Link>
        </div>
      </header>
      <div className='date-guest-select-container'>
        <div className='date-guest-top'>
          <div className='date-guest-top-left'>
            <p className='check-in bold'>CHECK-IN</p>
            <input
              className='date-input'
              type='date'
              defaultValue='2023-04-03'
            />
          </div>
          <div className='date-guest-top-right'>
            <p className='check-out bold'>CHECK-OUT</p>
            <input
              className='date-input'
              type='date'
              defaultValue='2023-04-10'
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
      </div>

      <Link to='/feature-not-found' className='reserve-btn bold'>This ain't no button</Link>

      <p className='no-charge-disclaimer'>You won't be charged yet. Or ever.</p>

      <div className='price-breakdown-container'>
        <p className='nightly-price'>
          <Link to='/feature-not-found' className='price-breakdown-left'>${spot.price} x 5 nights</Link>
          <span>${spot.price * 5}</span>
        </p>
        <p className='cleaning-fee'>
          <Link to='/feature-not-found' className='price-breakdown-left'>Cleaning fee</Link>
          <span>$LOL</span>
        </p>
        <p className='service-fee'>
          <Link to='/feature-not-found' className='price-breakdown-left'>Service Fee</Link>
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
