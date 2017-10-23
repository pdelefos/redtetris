import React from 'react';
import './index.css';


let Counter = ({ counter, incrementNum, decrementNum, increment, decrement, reset }) => {
  return (
    <div>
      <p className="number">Counter: {counter}</p>
      <p className="number">Number of increment: {incrementNum} </p>
      <p className="number">Number of decrement: {decrementNum} </p>
      <button className="button" onClick={e => {
        e.preventDefault()
        increment(3)
      }
      }> Increment</button>
      <button className="button" onClick={e => {
        e.preventDefault()
        decrement(2)
      }
      }> Decrement</button>
      <button className="button" onClick={e => {
        e.preventDefault()
        reset()
      }
      }> Reset</button>
    </div>
  )
}

export default Counter;