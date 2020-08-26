import { constans, authenticate, fetch, item } from 'data/constans';

const initialState = {
  user: {
    userID: '5f44ec9e5bcfa9fe4402a7f5',
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case constans.REMOVE_ITEM:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter((node) => node.id !== action.payload.id),
        ],
      };
    case constans.ADD_ITEM:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.item],
      };
    case authenticate.AUTHENTICATE_SUCCES:
      return {
        ...state,
        user: {
          // eslint-disable-next-line no-underscore-dangle
          userID: action.payload.data._id,
        },
      };
    case fetch.FETCH_SUCCES:
      return {
        ...state,
        [action.payload.itemType]: [...action.payload.data],
      };
    case item.ADD_ITEM_SUCCES:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.data],
      };
    default:
      return { ...state };
  }
};
export default rootReducer;
