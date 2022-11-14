/* ----------------------------------------------------------- */
/* ------------------------- ACTIONS ------------------------- */
/* ----------------------------------------------------------- */
const LOGIN_MODAL = 'modals/LOGIN_MODAL';
const SIGNUP_MODAL = 'modals/SIGNUP_MODAL';

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

/* ----------------------------------------------------------- */
/* ------------------------- REDUCER ------------------------- */
/* ----------------------------------------------------------- */

const initialState = { showLoginModal: false, showSignupModal: false };

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_MODAL:
      return { ...state, showLoginModal: action.boolean };
    case SIGNUP_MODAL:
      return { ...state, showSignupModal: action.boolean };
    default:
      return state;
  }
};

export default modalReducer;
