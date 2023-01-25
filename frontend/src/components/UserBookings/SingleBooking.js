import { NavLink } from 'react-router-dom';
import './SingleBooking.css';

const SingleBooking = ({ booking }) => {
  const spot = booking.Spot;
  const startDate = new Date(booking.startDate).getFullYear()
  console.log(startDate)

  const handleDelete = () => {
    alert(`DELETE PRESSED FOR BOOKING: ${booking.id}`);
  };

  return (
    <div className='single-booking'>
      <NavLink to={`/spots/${spot.id}`}>
        <div
          className='spot-card-img'
          style={{ backgroundImage: `url('${spot.previewImage}')` }}
        />
      </NavLink>
      <div className='spot-text-container'>
        <h3 className='spot-name bold'>{spot.address}</h3>
        <span className='booking-dates'>
          <span>
            <p className='booking-date'>
              Starting on: <span className='bold'>{booking.startDate}</span>
            </p>
            <p className='booking-date'>
              Ending on: <span className='bold'>{booking.endDate}</span>
            </p>
          </span>
          <button onClick={handleDelete}>Cancel</button>
        </span>
      </div>
    </div>
  );
};

export default SingleBooking;
