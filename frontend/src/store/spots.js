import { csrfFetch } from './csrf';

/* ----------------------------------------------------------- */
/* ------------------------- ACTIONS ------------------------- */
/* ----------------------------------------------------------- */

const SET_SPOTS = 'spots/SET_SPOTS';

export const setSpots = spots => {
  return {
    type: SET_SPOTS,
    spots
  };
};

/* ----------------------------------------------------------- */
/* ------------------------- THUNKS -------------------------- */
/* ----------------------------------------------------------- */

export const getSpots = async dispatch => {
  const res = await csrfFetch(`/api/spots`);

  if (res.ok) {
    const data = await res.json();
    dispatch(setSpots(data.Spots));
    return res;
  }
  return res;
};

/* ----------------------------------------------------------- */
/* ------------------------- REDUCER ------------------------- */
/* ----------------------------------------------------------- */

const initialState = { spots: null };

const spotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SPOTS: {
      return { ...state, spots: action.spots };
    }
    default:
      return state;
  }
};

export default spotsReducer;
