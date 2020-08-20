import { constans } from 'data/constans';

export const removeItem = (itemType, id) => ({
  type: constans.REMOVE_ITEM,
  payload: {
    itemType,
    id,
  },
});

export const addItem = (itemType, itemContent) => {
  const getId = () => `_${Math.random().toString(36).substr(2, 9)}`;
  return {
    type: constans.ADD_ITEM,
    payload: {
      itemType,
      item: {
        id: getId(),
        ...itemContent,
      },
    },
  };
};
