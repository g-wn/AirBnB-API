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

export const getUserReviews = () => async dispatch => {
  const res = await csrfFetch(`/api/reviews/current`);

  if (res.ok) {
    const data = await res.json();
    dispatch(setCurrentUserReviews(normalizeArray(data.Reviews)));
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
    dispatch(createReview(data));
    return res;
  }
  return res;
};

export const putReview = (reviewId, payload) => async dispatch => {
  const res = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: 'PUT',
    body: JSON.stringify(payload)
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(updateReview(data));
    return res;
  }
  return res;
};

export const deleteReview = reviewId => async dispatch => {
  const res = await csrfFetch(`api/reviews/${reviewId}`, {
    method: 'DELETE'
  });

  if (res.ok) {
    const data = res.json();
    dispatch(removeReview(reviewId));
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
    case CURRENT_USER_REVIEWS: {
      return { ...state, currentUserReviews: { ...action.currentUserReviews } };
    }
    case CREATE_REVIEW: {
      return {
        ...state,
        spotReviews: { ...state.spotReviews, [action.review.id]: action.review },
        currentUserReviews: { ...state.currentUserReviews, [action.review.id]: action.review }
      };
    }
    case REMOVE_REVIEW: {
      const newState = { ...state };
      console.log('NEW STATE----------->', newState)
      if (newState.spotReviews[action.reviewId]) delete newState.spotReviews[action.reviewId];
      if (newState.currentUserReviews[action.reviewId]) delete newState.currentUserReviews[action.reviewId];
      return newState;
    }
    default:
      return state;
  }
};

export default reviewsReducer;
