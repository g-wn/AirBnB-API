import { useSelector } from 'react-redux';
import { months } from '../../utils/dates';
import { faker } from '@faker-js/faker';
import './ReviewCard.css';
import ReviewOptions from './ReviewOptions';

export default function ReviewCard({ review, spot }) {
  const currentUser = useSelector(state => state.session.user);

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
          <div className='review-content'>
            <div>{review.review}</div>
            <div>
              {review.userId === currentUser?.id ? (
                <ReviewOptions
                  review={review}
                  spot={spot}
                />
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
