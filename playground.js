const reducer = (state = [], action) => {
  if (action.type === 'SPLIT_STRING') {
    return action.payload.split('');
  } else if (action.type === 'ADD_CHARACTER') {
    return [...state, action.payload];
  }
  return state;
};

const store = Redux.createStore(reducer);

store.getState();

const action = {
  type: 'SPLIT_STRING',
  payload: 'asdf',
};

store.dispatch(action);

store.getState();


const action2 = {
  type: 'ADD_CHARACTER',
  payload: 'u',
};
store.dispatch(action2);
store.getState();
