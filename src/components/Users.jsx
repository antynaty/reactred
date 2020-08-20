import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove, fetchUsers } from '../actions';

const Users = () => {
  const agregados = useSelector(state => state.datos.agregados);
  const removidos = useSelector(state => state.datos.removidos);
  const dispatch = useDispatch();
  return (
    <div className="user-container">
      <div><button onClick={() => dispatch(fetchUsers())}>Fetch Users</button></div>
      <div className="col-6">
        <h2>usuarios</h2>
        {
          agregados ?
            agregados.map(agregado => (
              <article key={`au-${agregado.id}`}>
                <h3>{agregado.name}</h3>
                <button onClick={() => dispatch(remove(agregado))}>-</button>
              </article>
            )) : <div> AGREGADOS </div>
        }
      </div>
      <div className="col-6">
        <h2>removidos</h2>
        {
          removidos ?
            removidos.map(removido => (
              <article key={`ar-${removido.id}`}>
                <h3>{removido.name}</h3>
                <button onClick={() => dispatch(add(removido))}>+</button>
              </article>
            )) : <div> REMOVIDOS</div>
        }
      </div>
    </div>
  )
}

export default Users;