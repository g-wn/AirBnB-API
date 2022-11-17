import { useDispatch, useSelector } from 'react-redux';
import { currentUserSpotsModal } from '../../store/modal';
import * as spotActions from '../../store/spots';
import SpotCard from '../SpotCard';

import { IoCloseSharp } from 'react-icons/io5';
import { FaTrashAlt } from 'react-icons/fa';
import { AiOutlineEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function CurrentUserSpots() {
  const dispatch = useDispatch();
  const userSpots = useSelector(state => state.spots.currentUserSpots);

  const handleDelete = async (e, spotId) => {
    e.preventDefault();

    await dispatch(spotActions.getSpots())
    await dispatch(spotActions.deleteSpot(spotId));
    await dispatch(spotActions.getCurrentUsersSpots());
  };

  return (
    <>
      <header className='user-spots-header'>
        <button
          className='close-form-btn'
          onClick={() => dispatch(currentUserSpotsModal(false))}
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
                <div className='spot-description'>
                  <h1 className='spot-name'>{spot.address}</h1>
                  <p className='spot-description'>{spot.description}</p>
                </div>
                <div className='user-spot-card-btns'>
                  <p className='edit-disclaimer'>Need to change some information about this spot?</p>
                  <Link to={{
                    pathname: `/update/${spot.id}`,
                    state: {
                      spot: spot
                    }
                  }} className='edit-user-spot-btn'>
                    <AiOutlineEdit /> Update this spot
                  </Link>
                  <p className='delete-disclaimer'>Don't want to host this spot anymore?</p>
                  <button
                    className='delete-user-spot-btn'
                    onClick={e => handleDelete(e, spot.id)}
                  >
                    <FaTrashAlt /> Remove this spot
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
