import { csrfFetch } from './csrf';

/* ----------------------------------------------------------- */
/* ------------------------- ACTIONS ------------------------- */
/* ----------------------------------------------------------- */

const SET_SPOTS = 'spots/SET_SPOTS';
const SET_SPOT = 'spots/SET_SPOT';
const CURRENT_USER_SPOTS = 'spots/CURRENT_USER_SPOTS';
const CREATE_SPOT = 'spots/CREATE_SPOT';
const UPDATE_SPOT = 'spots/UPDATE_SPOT';
const REMOVE_SPOT = 'spots/REMOVE_SPOT';
const ADD_IMAGE = 'images/ADD_IMAGE';

export const setSpots = allSpots => {
  return {
    type: SET_SPOTS,
    allSpots
  };
};

export const setSpot = spotDetail => {
  return {
    type: SET_SPOT,
    spotDetail
  };
};

export const createSpot = spot => {
  return {
    type: CREATE_SPOT,
    spot
  };
};

export const updateSpot = spot => {
  return {
    type: UPDATE_SPOT,
    spot
  };
};

export const removeSpot = spotId => {
  return {
    type: REMOVE_SPOT,
    spotId
  };
};

export const setCurrentUserSpots = currentUserSpots => {
  console.log('IN ACTION CREATOR');
  return {
    type: CURRENT_USER_SPOTS,
    currentUserSpots
  };
};

export const addSpotImage = (spotId, imageId, imageUrl, preview) => {
  return {
    type: ADD_IMAGE,
    imageId,
    imageUrl,
    preview
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
  return res;
};

export const postSpot = payload => async dispatch => {
  const { address, city, state, country, name, description, price } = payload;

  const res = await csrfFetch(`/api/spots`, {
    method: 'POST',
    body: JSON.stringify({ address, city, state, country, name, description, price })
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(createSpot(data));
    return data;
  }
  return res;
};

export const putSpot = (spotId, payload) => async dispatch => {
  const { address, city, state, country, lat, lng, name, description, price } = payload;
  const res = await csrfFetch(`/api/spots/${spotId}`, {
    method: 'PUT',
    body: JSON.stringify({ address, city, state, country, lat, lng, name, description, price })
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(updateSpot(data));
    return res;
  }
  return res;
};

export const deleteSpot = spotId => async dispatch => {
  const res = await csrfFetch(`/api/spots/${spotId}`, {
    method: 'DELETE'
  });

  if (res.ok) {
    dispatch(removeSpot(spotId));
    return res;
  }
  return res;
};

export const getCurrentUsersSpots = () => async dispatch => {
  const res = await csrfFetch(`/api/spots/current`);

  if (res.ok) {
    const data = await res.json();
    console.log('IN THUNK: ', data.Spots);
    dispatch(setCurrentUserSpots(data.Spots));
    return res;
  }
  return res;
};

export const postImage = (spotId, payload) => async dispatch => {
  const { url, preview } = payload;
  const res = await csrfFetch(`/api/spots/${spotId}/images`, {
    method: 'POST',
    body: JSON.stringify({
      url,
      preview
    })
  });

  return res;
};

/* ----------------------------------------------------------- */
/* ------------------------- REDUCER ------------------------- */
/* ----------------------------------------------------------- */

const initialState = { allSpots: null, spotDetail: null, currentUserSpots: null };

const spotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SPOTS: {
      return { ...state, allSpots: normalizeArray(action.allSpots) };
    }
    case SET_SPOT: {
      return { ...state, spotDetail: action.spotDetail };
    }
    case CREATE_SPOT: {
      return { ...state, spots: { ...state.allSpots, [action.spot.id]: action.spot } };
    }
    case UPDATE_SPOT: {
      return { ...state, spots: { ...state.allSpots, [action.spot.id]: action.spot } };
    }
    case REMOVE_SPOT: {
      const newState = { ...state };
      delete newState[action.spotId];
      return newState;
    }
    case CURRENT_USER_SPOTS: {
      return { ...state, currentUserSpots: normalizeArray(action.currentUserSpots) };
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
