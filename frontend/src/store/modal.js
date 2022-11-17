/* ----------------------------------------------------------- */
/* ------------------------- ACTIONS ------------------------- */
/* ----------------------------------------------------------- */
const LOGIN_MODAL = 'modals/LOGIN_MODAL';
const SIGNUP_MODAL = 'modals/SIGNUP_MODAL';
const USER_SPOTS_MODAL = 'modals/USER_SPOTS_MODAL';
const USER_REVIEWS_MODAL = 'modals/USER_REVIEWS_MODAL';

export const loginModal = boolean => {
  return {
    type: LOGIN_MODAL,
    boolean
  };
};

export const signupModal = boolean => {
  return {
    type: SIGNUP_MODAL,
    boolean
  };
};

export const currentUserSpotsModal = boolean => {
  return {
    type: USER_SPOTS_MODAL,
    boolean
  };
};

export const currentUserReviewsModal = boolean => {
  return {
    type: USER_REVIEWS_MODAL,
    boolean
  };
};

/* ----------------------------------------------------------- */
/* ------------------------- REDUCER ------------------------- */
/* ----------------------------------------------------------- */

const initialState = {
  showLoginModal: false,
  showSignupModal: false,
  showCurrentUserSpotsModal: false,
  showCurrentUserReviewsModal: false
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_MODAL: {
      return { ...state, showLoginModal: action.boolean };
    }
    case SIGNUP_MODAL: {
      return { ...state, showSignupModal: action.boolean };
    }
    case USER_SPOTS_MODAL: {
      return { ...state, showCurrentUserSpotsModal: action.boolean };
    }
    case USER_REVIEWS_MODAL: {
      return { ...state, showCurrentUserReviewsModal: action.boolean };
    }
    default:
      return state;
  }
};

export default modalReducer;
