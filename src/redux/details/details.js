const ADD_STATS = 'covid19/details/ADD_STATS';

const initialState = [];

export const addAction = (payload) => ({
  type: ADD_STATS,
  payload,
});

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STATS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default detailsReducer;
