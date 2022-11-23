/* ----------------------------------------------------------- */
/* ------------------------- ACTIONS ------------------------- */
/* ----------------------------------------------------------- */
const LOGIN_MODAL = 'modals/LOGIN_MODAL';
const SIGNUP_MODAL = 'modals/SIGNUP_MODAL';
const USER_SPOTS_MODAL = 'modals/USER_SPOTS_MODAL';
const USER_REVIEWS_MODAL = 'modals/USER_REVIEWS_MODAL';
const ADD_REVIEW_MODAL = 'modals/ADD_REVIEW_MODAL';
const ABOUT_MODAL = 'modals/ABOUT_MODAL';

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

export const addReviewModal = boolean => {
  return {
    type: ADD_REVIEW_MODAL,
    boolean
  };
};

export const aboutModal = boolean => {
  return {
    type: ABOUT_MODAL,
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
  showCurrentUserReviewsModal: false,
  showAddReviewModal: false,
  showAboutModal: false
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
    case ADD_REVIEW_MODAL: {
      return { ...state, showAddReviewModal: action.boolean };
    }
    case ABOUT_MODAL: {
      return { ...state, showAboutModal: action.boolean };
    }
    default:
      return state;
  }
};

export default modalReducer;
