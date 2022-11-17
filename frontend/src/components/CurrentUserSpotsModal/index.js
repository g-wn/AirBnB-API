import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import { currentUserSpotsModal } from '../../store/modal';
import CurrentUserSpots from './CurrentUserSpots';
import './CurrentUserSpots.css';

export default function CurrentUserSpotsModal() {
  const dispatch = useDispatch();
  const showCurrentUserSpotsModal = useSelector(state => state.modal.showCurrentUserSpotsModal);

  return (
    <>
      <button
        className='user-spots-btn'
        onClick={() => dispatch(currentUserSpotsModal(true))}
      >
        My spots
      </button>
      {showCurrentUserSpotsModal && (
        <Modal onClose={() => dispatch(currentUserSpotsModal(false))}>
          <CurrentUserSpots />
        </Modal>
      )}
    </>
  );
}
