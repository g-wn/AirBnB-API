import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import { currentUserReviewsModal } from '../../store/modal';
import CurrentUserReviews from './CurrentUserReviews';
import './CurrentUserReviews.css';

export default function CurrentUserReviewsModal() {
  const dispatch = useDispatch();
  const showCurrentUserReviewsModal = useSelector(state => state.modal.showCurrentUserReviewsModal);
  const userReviews = useSelector(state => state.reviews.currentUserReviews);

  return (
    <>
      <button
        className='user-reviews-btn'
        onClick={() => dispatch(currentUserReviewsModal(true))}
      >
        My reviews
      </button>
      {showCurrentUserReviewsModal && (
        <Modal onClose={() => dispatch(currentUserReviewsModal(false))}>
          <CurrentUserReviews userReviews={userReviews} />
        </Modal>
      )}
    </>
  );
}
