import { csrfFetch } from './csrf';

/* ----------------------------------------------------------- */
/* ------------------------- ACTIONS ------------------------- */
/* ----------------------------------------------------------- */

const SET_USER = 'users/SET_USER';
const REMOVE_USER = 'users/REMOVE_USER';

export const setUser = user => {
  return {
    type: SET_USER,
    user
  };
};

export const removeUser = user => {
  return {
    type: REMOVE_USER,
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
    const data = await res.json();
    dispatch(setUser(data.user));
    return data;
  }
  return res;
};

export const restoreUser = () => async dispatch => {
  const res = await csrfFetch(`/api/session`);

  if (res.ok) {
    const data = await res.json();
    dispatch(setUser(data.user));
    return data;
  }
  return res;
};

/* ----------------------------------------------------------- */
/* ------------------------- REDUCER ------------------------- */
/* ----------------------------------------------------------- */

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return { ...state, user: { ...action.user } };
    }
    case REMOVE_USER: {
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
