import React,{ useState } from 'react';
import BaseButton from './components/BaseButton';

function App() {

 const [count, setCount] = useState(0);

  return (
    <div>
        <BaseButton/>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default App;
