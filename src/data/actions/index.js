import { constans, authenticate, register, fetch, item } from 'data/constans';
import axios from 'axios';

export const removeItem = (itemType, id) => ({
  type: constans.REMOVE_ITEM,
  payload: {
    itemType,
    id,
  },
});

export const addItem = (itemType, itemContent) => (dispatch, getState) => {
  dispatch({ type: item.ADD_ITEM_REQUEST });
  return axios
    .post('http://localhost:9000/api/note', {
      userID: getState().user.userID,
      type: itemType,
      ...itemContent,
    })
    .then(({ data }) => {
      dispatch({
        type: item.ADD_ITEM_SUCCES,
        payload: {
          itemType,
          data,
        },
      });
    })
    .catch((err) => {
      dispatch({ type: item.ADD_ITEM_FAILURE });
      throw err;
    });
};

export const authenticateAction = (username, password) => (dispatch) => {
  dispatch({ type: authenticate.AUTHENTICATE_REQUEST });
  return axios
    .post('http://localhost:9000/api/user/login', { username, password })
    .then((payload) => {
      dispatch({ type: authenticate.AUTHENTICATE_SUCCES, payload });
    })
    .catch((err) => {
      dispatch({ type: authenticate.AUTHENTICATE_FAILURE });
      throw err;
    });
};

export const registerAction = (username, password, setIsRegister) => (dispatch) => {
  dispatch({ type: register.REGISTER_REQUEST });
  return axios
    .post('http://localhost:9000/api/user/register', { username, password })
    .then((payload) => {
      dispatch({ type: register.REGISTER_SUCCES, payload });
      setIsRegister(false);
    })
    .catch((err) => {
      dispatch({ type: register.REGISTER_FAILURE });
      throw err;
    });
};
export const fetchItems = (itemType) => (dispatch, getState) => {
  dispatch({ type: fetch.FETCH_REQUEST });
  return axios
    .get('http://localhost:9000/api/notes/type', {
      params: {
        type: itemType,
        userID: getState().user.userID,
      },
    })
    .then(({ data }) => {
      dispatch({
        type: fetch.FETCH_SUCCES,
        payload: {
          data,
          itemType,
        },
      });
    })
    .catch((err) => {
      dispatch({ type: fetch.FETCH_FAILURE });
      throw err;
    });
};
