import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as reviewActions from '../../store/reviews';

export default function TestSpotContainer({ spot }) {
  const dispatch = useDispatch();
  const reviews = useSelector(state => state.reviews.spotReviews);

  useEffect(() => {
    dispatch(reviewActions.getReviews(spot.id));
  }, [dispatch, spot.id]);

  const handleDelete = async (e, review) => {
    e.preventDefault();

    dispatch(reviewActions.deleteReview(review));
  };

  if (!reviews) return null;

  // console.log(Object.values(reviews));

  return Object.values(reviews).map((review, idx) => (
    <div key={idx}>
      <p>{review.id}</p>
      <p>{review.review}</p>
      <button onClick={e => handleDelete(e, review)}>delete</button>
    </div>
  ));
}
