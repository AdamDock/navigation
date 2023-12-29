import { useState, useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const SET_VALUE_TO_ADD = 'SET_VALUE_TO_ADD';
const ADD_VALUE = 'ADD_VALUE';
const RESET = 'RESET';

const reducer = (state, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    case 'SET_VALUE_TO_ADD':
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case 'ADD_VALUE':
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };
    case 'RESET':
      return {
        ...state,
        count: 0,
        valueToAdd: 0,
      };
    default:
      return state;
  }
};


function CounterPage({ initialCount }) {
  //const [count, setCount] = useState(initialCount);
  //const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });
 

  const increment = () => {
    dispatch({ type: INCREMENT });
    };
  const decrement = () => {
    dispatch({ type: DECREMENT });
    };
  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    console.log(state);

    dispatch({ type: SET_VALUE_TO_ADD, payload: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: ADD_VALUE });
  };
  const handleReset = (event) => {
    event.preventDefault();
    dispatch({ type: RESET });
  }

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ''}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <div className='flex flex-row'>
            <Button>Add it!</Button><Button onClick={handleReset}>Reset</Button>
         </div>
      </form>
    </Panel>
  );
}

export default CounterPage;