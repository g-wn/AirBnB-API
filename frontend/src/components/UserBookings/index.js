import { useSelector } from 'react-redux';
import SingleBooking from './SingleBooking';
import './UserBookings.css';

const UserBookings = () => {
  const userBookings = useSelector(state => Object.values(state.bookings.currentUserBookings));

  return (
    <div className='user-bookings-container'>
      <header className='user-bookings-header'>
        <h2>My Bookings</h2>
      </header>
      <div className='user-bookings-body'>
        {userBookings.length > 0 ? (
          <div className='user-bookings'>
            {userBookings.map((booking, idx) => (
              <div
                key={idx}
                className='single-booking-container'
              >
                <SingleBooking booking={booking} />
              </div>
            ))}
          </div>
        ) : (
          <div className='no-user-bookings'>No user bookings</div>
        )}
      </div>
    </div>
  );
};

export default UserBookings;
