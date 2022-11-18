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
          <span className='booking-details-component-numreviews'>{spot.numReviews} reviews</span>
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
          <div className='date-guest-btm-left'>
            <p className='guest-text'>GUESTS</p>
            <p className='guest-count'>1 guest</p>
          </div>
          <div className='date-guest-btm-right'>
            <div className='num-guests-icon'>
              <BsChevronDown size={20} />
            </div>
          </div>
        </div>
      </div>

      <button className='reserve-btn bold' onClick={() => alert('Why did you click that? It says it is NOT a button!')}>This ain't no button</button>

      <p className='no-charge-disclaimer'>You won't be charged yet. Or ever.</p>

      <div className='price-breakdown-container'>
        <p className='nightly-price'>
          <span className='price-breakdown-left'>${spot.price} x 5 nights</span>
          <span>${spot.price * 5}</span>
        </p>
        <p className='cleaning-fee'>
          <span className='price-breakdown-left'>Cleaning fee</span>
          <span>$LOL</span>
        </p>
        <p className='service-fee'>
          <span className='price-breakdown-left'>Service Fee</span>
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
