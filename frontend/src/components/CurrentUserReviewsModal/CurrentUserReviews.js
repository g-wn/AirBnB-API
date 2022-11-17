import { useDispatch } from 'react-redux';
import { currentUserReviewsModal } from '../../store/modal';
import * as reviewActions from '../../store/reviews';
// import ReviewCard from '../ReviewCard';

import { IoCloseSharp } from 'react-icons/io5';
import { FaTrashAlt } from 'react-icons/fa';

import './CurrentUserReviews.css';

export default function CurrentUserReviews({ userReviews }) {
  const dispatch = useDispatch();

  const handleDelete = async (e, reviewId) => {
    e.preventDefault();

    await dispatch(reviewActions.deleteReview(reviewId));
    await dispatch(reviewActions.getUserReviews());
  };

  return (
    <>
      <header className='user-reviews-header'>
        <button
          className='close-form-btn'
          onClick={() => dispatch(currentUserReviewsModal(false))}
        >
          <IoCloseSharp size={20} />
        </button>
        <div className='header-text-bold'>My Reviews</div>
        <div className='hidden'></div>
      </header>

      <div className='user-reviews-container'>
        {userReviews &&
          Object.values(userReviews).map((review, idx) => (
            <div
              className='user-review-card-container'
              key={idx}
            >
              {/* <div className='test'>
                <ReviewCard
                  className='user-review-card'
                  review={review}
                />
              </div> */}
              <div className='user-review-card-options'>
                <div className='review-content-container'>
                  <h1 className='review-spot-address'>
                    address:{review.Spot?.address}stars:{review?.stars}reviewID:{review?.id}
                  </h1>
                  <p className='review-content'>review:{review?.review}</p>
                </div>
                <div className='user-review-card-btns'>
                  <p className='delete-disclaimer'>Don't want your opinion heard anymore? Good.</p>
                  <button
                    className='delete-user-review-btn'
                    onClick={e => handleDelete(e, review?.id)}
                  >
                    <FaTrashAlt /> Remove this review
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
