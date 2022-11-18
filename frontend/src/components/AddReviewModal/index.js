import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import { addReviewModal } from '../../store/modal';
import AddReviewForm from './AddReview';
import './AddReview.css';

export default function AddReviewModal({ spot }) {
  const dispatch = useDispatch();
  const showAddReviewModal = useSelector(state => state.modal.showAddReviewModal);
  const user = useSelector(state => state.session.user);

  return (
    <>
      {user && spot.ownerId !== user.id && (
        <button
          className='add-review-btn'
          onClick={() => dispatch(addReviewModal(true))}
        >
          Leave a review
        </button>
      )}
      {showAddReviewModal && (
        <Modal onClose={() => dispatch(addReviewModal(false))}>
          <AddReviewForm spot={spot} />
        </Modal>
      )}
    </>
  );
}
