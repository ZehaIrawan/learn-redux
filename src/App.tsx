import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BaseButton from './components/BaseButton';
import { RootState } from './Redux/store';
import { decrement, increment, incrementByAmount } from './Redux/counter';

function App() {
  //  const [count, setCount] = useState(0);
  const { count } = useSelector((state: RootState) => state.counter);

  const dispatch = useDispatch();

  const [amount, setAmount] = useState<number>(0);

  return (
    <div>
      <BaseButton />
      <p>You clicked {count} times</p>
      {/* <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button> */}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <input
        type="number"
        value={amount}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setAmount(parseInt(e.target.value))
        }
        />
        <button onClick={() => dispatch(incrementByAmount(amount))}>Increase by {amount}</button>
    </div>
  );
}

export default App;
