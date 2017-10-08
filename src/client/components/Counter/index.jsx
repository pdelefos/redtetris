import React from 'react';
import styles from './index.css';


let Counter = ({ counter, incrementNum, decrementNum, increment, decrement, reset }) => {
  return (
    <div>
      <p className={ styles.number }>Counter: { counter }</p>
      <p className={ styles.number }>Number of increment: { incrementNum } </p>
      <p className={ styles.number }>Number of decrement: { decrementNum } </p>
      <button className={ styles.button } onClick={ e => {
          e.preventDefault()
          increment(3) }
      }> Increment</button>
      <button className={ styles.button } onClick={ e => {
          e.preventDefault()
          decrement(2) }
      }> Decrement</button>
      <button className={ styles.button } onClick={ e => {
          e.preventDefault()
          reset() }
      }> Reset</button>
    </div>
  )
}

export default Counter;