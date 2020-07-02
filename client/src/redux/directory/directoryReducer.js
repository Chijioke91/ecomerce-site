import { sections } from './directory.data';

const init_state = {
  sections,
};

export default (state = init_state, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
