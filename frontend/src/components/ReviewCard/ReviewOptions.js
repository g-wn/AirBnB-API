import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as reviewActions from '../../store/reviews';
import * as spotActions from '../../store/spots';
import { editReviewModal } from '../../store/modal';
import { Modal } from '../../context/Modal';
import AddReviewForm from '../AddReviewModal/AddReview';
import { AiOutlineEdit } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';
import { SlOptions } from 'react-icons/sl';
import './ReviewOptions.css';

const ReviewOptions = ({ review, spot }) => {
  const dispatch = useDispatch();
  const showEditReviewModal = useSelector(state => state.modal.showEditReviewModal);
  const [showOptionsPop, setShowOptionsPop] = useState(false);

  const openPop = () => {
    if (showOptionsPop) return;
    setShowOptionsPop(true);
  };

  useEffect(() => {
    if (!showOptionsPop) return;

    const closeDrop = () => {
      setShowOptionsPop(false);
    };

    document.addEventListener('click', closeDrop);

    return () => document.removeEventListener('click', closeDrop);
  }, [showOptionsPop]);

  const handleDelete = async e => {
    e.preventDefault();

    await dispatch(reviewActions.deleteReview(review));
    await dispatch(spotActions.getSpot(review.spotId));
    await dispatch(spotActions.getSpots());
  };

  return (
    <div className='review-options-container'>
      <button
        className='review-options-btn'
        onClick={openPop}
      >
        <SlOptions />
      </button>
      {showOptionsPop && (
        <div className='review-options'>
          <button
            className='edit-review-btn'
            onClick={() => dispatch(editReviewModal(true))}
          >
            <AiOutlineEdit size={22} />
          </button>
          <button
            className='delete-review-btn'
            onClick={e => handleDelete(e)}
          >
            <FaTrashAlt size={15} />
          </button>
        </div>
      )}
      {showEditReviewModal && (
        <Modal onClose={() => dispatch(editReviewModal(false))}>
          <AddReviewForm
            formType='edit'
            spot={spot}
            prevReview={review}
          />
        </Modal>
      )}
    </div>
  );
};

export default ReviewOptions;
