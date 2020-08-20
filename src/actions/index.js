import axios from 'axios';
export const increment = number => {
  return {
    type: 'INCREMENT',
    number
  }
};

export const decrement = number => {
  return {
    type: 'DECREMENT',
    number
  }
};
export const remove = agregado => {
  return {
    type: 'REMOVE',
    agregado
  }
};
export const add = removido => {
  return {
    type: 'ADD-BACK',
    removido
  }
};

export const fetchUsersRequest = () => {
  return {
    type: 'FETCH_USERS_REQUEST'
  }
}
export const fetchUsersSuccess = users => {
  return {
    type: 'FETCH_USERS_SUCCESS',
    users
  }
}
export const fetchUsersFailure = error => {
  return {
    type: 'FETCH_USERS_FAILURE',
    payload: error
  }
}
export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // const users = response.data.slice(0, 5);
        console.log(response.data)
        dispatch(fetchUsersSuccess(response.data));
      })
      .catch(err => {
        dispatch(fetchUsersFailure('No se pudo encontrar los datos'))
        console.log(err)
      })
  }
}