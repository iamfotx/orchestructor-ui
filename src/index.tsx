import { useState } from 'react'
import {render} from 'react-dom';

import {Header} from './header'

function App() {
  const [count, setCount] = useState(0)
  const incrementCounter = () => setCount(prevCount => prevCount + 1)
  const decrementCounter = () => setCount(prevCount => prevCount - 1)
  return (
    <>
      <Header />
      <p>{count}</p>
      <button onClick={incrementCounter}>+1</button>
      <button onClick={decrementCounter}>-1</button>
    </>
  )
}

render(<App />, document.getElementById('root'))