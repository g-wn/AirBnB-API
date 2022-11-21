import { useDispatch } from 'react-redux';
import { currentUserReviewsModal } from '../../store/modal';
import * as reviewActions from '../../store/reviews';
import * as spotActions from '../../store/spots';
import ReviewCard from '../ReviewCard';

import { IoCloseSharp } from 'react-icons/io5';
import { FaTrashAlt } from 'react-icons/fa';

import './CurrentUserReviews.css';

export default function CurrentUserReviews({ userReviews }) {
  const dispatch = useDispatch();

  const handleDelete = async (e, review) => {
    e.preventDefault();

    await dispatch(reviewActions.deleteReview(review));
    await dispatch(spotActions.getSpot(review.spotId));
    await dispatch(spotActions.getSpots());
  };

  return (
    <div className='user-reviews-container'>
      <header className='user-reviews-header'>
        <button
          className='close-form-btn'
          onClick={() => dispatch(currentUserReviewsModal(false))}
        >
          <IoCloseSharp size={20} />
        </button>
        <div className='header-text bold'>My Reviews</div>
        <div className='hidden'></div>
      </header>

      {userReviews &&
        Object.values(userReviews).map((review, idx) => (
          <div
            className='user-review-card-container'
            key={idx}
          >
            <ReviewCard
              className='user-review-card'
              review={review}
            />
            <div className='user-review-card-btns'>
              <p className='delete-disclaimer'>Don't want your opinion heard anymore? Good.</p>
              <button
                className='delete-user-review-btn'
                onClick={e => {
                  handleDelete(e, review);
                }}
              >
                <FaTrashAlt /> Remove this review
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
