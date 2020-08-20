import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions';

const Operations = () => {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="operation-container">
      <h4>{counter}</h4>
      <button onClick={() => dispatch(increment(1))}>+</button>
      <button onClick={() => dispatch(decrement(1))}>-</button>
    </div>
  )
}

export default Operations;