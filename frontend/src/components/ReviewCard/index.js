import { months } from '../../utils/dates';
import { faker } from '@faker-js/faker';
import './ReviewCard.css';

export default function ReviewCard({ review }) {
  console.log('REVIEW --------->', review);

  return (
    <>
      {review && (
        <div className='review-card'>
          <header className='review-card-header'>
            <div className='review-user-avatar'>
              <img
                src={faker.image.avatar()}
                alt='userAvatar'
              />
            </div>
            <div className='review-details'>
              <div className='reviewer-name bold'>
                {review.User?.firstName ? review.User.firstName : review.firstName}
              </div>
              <div className='review-month-year'>
                {months[new Date(review.createdAt).getMonth()]} {new Date(review.createdAt).getFullYear()}
              </div>
            </div>
          </header>
          <div className='review-content'>{review.review}</div>
        </div>
      )}
    </>
  );
}
