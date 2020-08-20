const reducerLoggin = (state = null, action) => {
  switch (action.type) {
    case 'LOGGED_IN':
      return {
        ...state
      };
    case 'NOT_LOGGED_IN':
      return {
        ...state
      };
    default:
      return state
  }
}

export default reducerLoggin;

