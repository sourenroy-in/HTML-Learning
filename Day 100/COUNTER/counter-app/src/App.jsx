import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  const MIN = 0;
  const MAX = 10;

  const increment = ()=> {
      setCount((prev) => (prev < MAX ? prev +1 : prev))
    }
  

  const decrement = () => {
    setCount((prev) => (prev > MIN ? prev -1 : prev))
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <>
    <div className='container'>
      <h1>Counter App</h1>

      <div className='box'>
        <h2>{count}</h2>
      </div>

      <div className='buttons'>
        <button onClick={decrement} id='decrement'>-</button>
        <button onClick={reset}>reset</button>
        <button onClick={increment} id='increment'>+</button>
      </div>
      <p>Min: {MIN} | Max: {MAX}</p>
    </div>
    </>
  )
}

// export default App
