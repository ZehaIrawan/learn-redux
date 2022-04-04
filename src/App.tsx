import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BaseButton from './components/BaseButton';
import { RootState } from './Redux/store';
import {decrement, increment} from './Redux/counter'

function App() {

//  const [count, setCount] = useState(0);
const { count } = useSelector((state: RootState) => state.counter);

const dispatch = useDispatch();

  return (
    <div>
      <BaseButton />
      <p>You clicked {count} times</p>
      {/* <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button> */}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
