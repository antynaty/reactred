export const increment = (number) =>{
  return {
    type: 'INCREMENT',
    number
  }
};

export const decrement = (number) =>{
  return {
    type: 'DECREMENT',
    number
  }
};