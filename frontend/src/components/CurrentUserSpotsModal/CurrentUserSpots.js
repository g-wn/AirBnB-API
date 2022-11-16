import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as spotActions from '../../store/spots';
import SpotCard from '../SpotCard';
import { IoCloseSharp } from 'react-icons/io5';
import { currentUserModal } from '../../store/modal';

export default function CurrentUserSpots() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const userSpots = useSelector(state => state.spots.currentUserSpots);

  useEffect(() => {
    sessionUser && dispatch(spotActions.getCurrentUsersSpots());
  }, [dispatch, sessionUser]);

  return (
    <>
      <header className='user-spots-header'>
        <button
          className='close-form-btn'
          onClick={() => dispatch(currentUserModal(false))}
        >
          <IoCloseSharp size={20} />
        </button>
        <div className='header-text bold'>My Spots</div>
        <div className='hidden'></div>
      </header>

      <div className='user-spots-container'>
        {userSpots &&
          Object.values(userSpots).map((spot, idx) => (
            <div
              className='user-spot-card-container'
              key={idx}
            >
              <div className='test'>
                <SpotCard
                  className='user-spot-card'
                  spot={spot}
                />
              </div>
              <div className='user-spot-card-options'>
                <div className='spot-description'>{spot.description}</div>
                <div className='user-spot-card-btns'>
                  <button className='edit-user-spot-btn'>EDIT</button>
                  <button className='delete-user-spot-btn'>DELETE</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
