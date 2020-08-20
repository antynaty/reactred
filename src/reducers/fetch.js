const initState = {
  loading: false,
  error: false
}

const fetchReducer = (state = initState, action) => {
  switch (action.type) { 
    case 'FETCH_USERS_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        loading: false,
        agregados: action.agregados.concat(action.agregado)
      }
    case 'FETCH_USERS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default fetchReducer;