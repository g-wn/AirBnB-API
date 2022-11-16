import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import { currentUserModal } from '../../store/modal';
import CurrentUserSpots from './CurrentUserSpots';
import './CurrentUserSpots.css';

export default function CurrentUserSpotsModal() {
  const dispatch = useDispatch();
  const showCurrentUserModal = useSelector(state => state.modal.showCurrentUserModal);

  return (
    <>
      <button
        className='user-spots-btn'
        onClick={() => dispatch(currentUserModal(true))}
      >
        My spots
      </button>
      {showCurrentUserModal && (
        <Modal onClose={() => dispatch(currentUserModal(false))}>
          <CurrentUserSpots />
        </Modal>
      )}
    </>
  );
}
