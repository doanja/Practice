const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_POSTS':
      return {
        ...state,
        items: action.payload
      };
    case 'NEW_POST':
      return {
        ...state,
        item: action.payload
      };
    case 'DELETE_POST':
      // return state.items.filter(({ id }) => id === action.payload);
      return {
        ...state,
        items: state.items.filter(({ id }) => id !== action.payload)
      };
    default:
      return state;
  }
}
