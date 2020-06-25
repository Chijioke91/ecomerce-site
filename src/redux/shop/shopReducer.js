import SHOP_DATA from './shop.data';

const init_state = {
  collections: SHOP_DATA,
};

export default (state = init_state, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
