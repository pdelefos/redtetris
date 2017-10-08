import { connect } from 'react-redux'
import { increment, decrement, reset } from '../actions/counter'
import Counter from '../components/Counter'


const mapStateToProps = state => {
  return {
      counter: state.move.counter,
      incrementNum: state.move.incrementNum,
      decrementNum: state.move.decrementNum
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch(increment(4))
    },
    decrement: () => {
      dispatch(decrement(2))
    },
    reset: () => {
      dispatch(reset())
    }
  }
}

const FinalCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default FinalCounter