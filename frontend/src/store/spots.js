import { csrfFetch } from './csrf';

/* ----------------------------------------------------------- */
/* ------------------------- ACTIONS ------------------------- */
/* ----------------------------------------------------------- */

const SET_SPOTS = 'spots/SET_SPOTS';
const SET_SPOT = 'spots/SET_SPOT';
const CREATE_SPOT = 'spots/CREATE_SPOT';

export const setSpots = spots => {
  return {
    type: SET_SPOTS,
    spots
  };
};

export const setSpot = spot => {
  return {
    type: SET_SPOT,
    spot
  };
};

export const createSpot = spot => {
  return {
    type: CREATE_SPOT,
    spot
  };
};

/* ----------------------------------------------------------- */
/* ------------------------- THUNKS -------------------------- */
/* ----------------------------------------------------------- */

export const getSpots = () => async dispatch => {
  const res = await csrfFetch(`/api/spots`);

  if (res.ok) {
    const data = await res.json();
    dispatch(setSpots(data.Spots));
    return res;
  }
  return res;
};

export const getSpot = spotId => async dispatch => {
  const res = await csrfFetch(`/api/spots/${spotId}`);

  if (res.ok) {
    const data = await res.json();
    dispatch(setSpot(data));
    return data;
  }
  // return res;
};

export const postSpot = payload => async dispatch => {
  const { address, city, state, country, name, description, price } = payload;
  const res = await csrfFetch(`/api/spots`, {
    method: 'POST',
    body: JSON.stringify({ address, city, state, country, name, description, price })
  });

  if (res.ok) {
    const data = await res.json();
    console.log('in res.ok', data);
    dispatch(createSpot(data));
    return res;
  }
  return res;
};

/* ----------------------------------------------------------- */
/* ------------------------- REDUCER ------------------------- */
/* ----------------------------------------------------------- */

const initialState = { spots: null, spot: null };

const spotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SPOTS: {
      return { ...state, spots: normalizeArray(action.spots) };
    }
    case SET_SPOT: {
      return { ...state, spot: action.spot };
    }
    case CREATE_SPOT: {
      return { ...state, spots: { ...state.spots, [action.spot.id]: action.spot } };
    }
    default:
      return state;
  }
};

const normalizeArray = array => {
  const newObj = {};

  array.forEach(item => {
    newObj[item.id] = item;
  });

  return newObj;
};

export default spotsReducer;

// window.store.dispatch(window.spotActions.createSpot({
//   'address': 'TEST ADDRESS',
//   'city': 'TEST CITY',
//   'state': 'TEST STATE',
//   'country': 'TEST COUNTRY',
//   'name': 'TEST NAME',
//   'description': 'TEST DESCRIPTION',
//   'price': 1000
// }))
