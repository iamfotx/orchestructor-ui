import { useState } from 'react';
import { render } from 'react-dom';

import { Header } from './header';
import './test';

import './styles/index.css';

function App() {
  const [count, setCount] = useState(0);
  const incrementCounter = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrementCounter = () => setCount((prevCount) => prevCount - 1);
  return (
    <>
      <Header />
      <p className="m-3">{count}</p>
      <button className="btn" onClick={incrementCounter}>
        +1
      </button>
      <button className="btn" onClick={decrementCounter}>
        -1
      </button>
    </>
  );
}

render(<App />, document.getElementById('root'));
