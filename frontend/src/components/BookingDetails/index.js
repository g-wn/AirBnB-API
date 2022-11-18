import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
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
              type='date'
              className='date-input'
            />
          </div>
          <div className='date-guest-top-right'>
            <p className='check-out bold'>CHECK-OUT</p>
            <input
              type='date'
              className='date-input'
            />
          </div>
        </div>
        <div className='date-guest-btm'>
          <select className='date-guest-btm-select'>
            <option value=''>Guests</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
            <option value={11}>11</option>
            <option value={12}>12</option>
            <option value={13}>13</option>
            <option value={14}>14</option>
            <option value={15}>15</option>
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
