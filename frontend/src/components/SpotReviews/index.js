import ReviewCard from '../ReviewCard';
import { AiFillStar } from 'react-icons/ai';
import './SpotReviews.css';

export default function SpotReviews({ spot, spotReviews }) {
  console.log(spot);

  return (
    <div className='spot-reviews-container'>
      <div className='spot-reviews-header bold'>
        <span>
          <AiFillStar size={20} />
        </span>
        <span>{spot.avgStarRating} - </span>
        <span className='spot-reviews-numreviews'>{spot.numReviews} reviews</span>
      </div>
      <div className='reviews-list'>
        {spotReviews &&
          Object.values(spotReviews).map((review, idx) => (
            <div
              className='spot-review-card'
              key={idx}
            >
              <ReviewCard review={review} />
            </div>
          ))}
      </div>
    </div>
  );
}
