const initState = {
  agregados: [{ id: 0, name: 'juan' }, { id: 100, name: 'juan2' }],
  removidos: [],
  loading: false,
  error: false
}

const usersReducer = (state = initState, action) => {
  console.log(action)
  switch (action.type) {
    case 'REMOVE':
      return {
        ...state,
        removidos: state.removidos.concat(action.agregado),
        agregados: state.agregados.filter(agregado => agregado.id !== action.agregado.id),
      };
    case 'ADD-BACK':
      return {
        ...state,
        agregados: state.agregados.concat(action.removido),
        removidos: state.removidos.filter(removido => removido.id !== action.removido.id),
      };
    case 'FETCH_USERS_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        loading: false,
        agregados: state.agregados.concat(action.users)
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

export default usersReducer;

