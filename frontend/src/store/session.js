import { csrfFetch } from './csrf';

/* ----------------------------------------------------------- */
/* ------------------------- ACTIONS ------------------------- */
/* ----------------------------------------------------------- */

const LOGIN_USER = 'users/LOGIN_USER';
const LOGOUT_USER = 'users/LOGOUT_USER';

export const setUser = user => {
  return {
    type: LOGIN_USER,
    user
  };
};

export const removeUser = user => {
  return {
    type: LOGOUT_USER,
    user
  };
};

/* ----------------------------------------------------------- */
/* ------------------------- THUNKS -------------------------- */
/* ----------------------------------------------------------- */

export const login = payload => async dispatch => {
  const { credential, password } = payload;
  const res = await csrfFetch(`/api/session`, {
    method: 'POST',
    body: JSON.stringify({ credential, password })
  });

  if (res.ok) {
    const user = await res.json();
    dispatch(setUser(user));
    return user;
  }
  return res;
};

/* ----------------------------------------------------------- */
/* ------------------------- REDUCER ------------------------- */
/* ----------------------------------------------------------- */

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      return { ...state, user: { ...action.user } };
    }
    case LOGOUT_USER: {
      return { ...initialState };
    }
    default:
      return state;
  }
};

/* ----------------------------------------------------------- */
/* ------------------------ UTILITIES ------------------------ */
/* ----------------------------------------------------------- */

export default sessionReducer;
