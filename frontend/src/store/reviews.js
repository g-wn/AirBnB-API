import { csrfFetch } from './csrf';
import { normalizeArray } from '../utils/normalizeArray';

/* ----------------------------------------------------------- */
/* ------------------------- ACTIONS ------------------------- */
/* ----------------------------------------------------------- */

const SET_SPOT_REVIEWS = 'reviews/SET_SPOT_REVIEWS';
const CURRENT_USER_REVIEWS = 'reviews/CURRENT_USER_REVIEWS';
const CREATE_REVIEW = 'reviews/CREATE_REVIEW';
const UPDATE_REVIEW = 'reviews/UPDATE_REVIEW';
const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW';

export const setReviews = reviews => {
  return {
    type: SET_SPOT_REVIEWS,
    reviews
  };
};

export const createReview = review => {
  console.log('DATA IN ACTION/ACTION CREATOR', review);
  return {
    type: CREATE_REVIEW,
    review
  };
};

export const updateReview = review => {
  return {
    type: UPDATE_REVIEW,
    review
  };
};

export const removeReview = reviewId => {
  return {
    type: REMOVE_REVIEW,
    reviewId
  };
};

export const setCurrentUserReviews = currentUserReviews => {
  return {
    type: CURRENT_USER_REVIEWS,
    currentUserReviews
  };
};

/* ----------------------------------------------------------- */
/* ------------------------- THUNKS -------------------------- */
/* ----------------------------------------------------------- */

export const getReviews = spotId => async dispatch => {
  const res = await csrfFetch(`/api/spots/${spotId}/reviews`);

  if (res.ok) {
    const data = await res.json();
    dispatch(setReviews(normalizeArray(data.Reviews)));
    return res;
  }
  return res;
};

export const postReview = (spotId, payload) => async dispatch => {
  const res = await csrfFetch(`/api/spots/${spotId}/reviews`, {
    method: 'POST',
    body: JSON.stringify(payload)
  });

  if (res.ok) {
    const data = await res.json();
    console.log('DATA IN THUNK/THUNK CREATOR --------->', data);
    dispatch(createReview(data));
    return res;
  }
  return res;
};

/* ----------------------------------------------------------- */
/* ------------------------- REDUCER ------------------------- */
/* ----------------------------------------------------------- */

const initialState = { spotReviews: null, currentUserReviews: null };

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SPOT_REVIEWS: {
      return { ...state, spotReviews: { ...action.reviews } };
    }
    case CREATE_REVIEW: {
      return { ...state, spotReviews: { ...state.spotReviews, [action.review.id]: action.review } };
    }
    default:
      return state;
  }
};

export default reviewsReducer;
