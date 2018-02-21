let initialState = {
  counter: 0,
  incrementNum: 0,
  decrementNum: 0
}

const move = (state = initialState, action) => {
  switch (action.type) {
    case 'INC':
      // socket.emit('cc')
      return {
        ...state,
        counter: state.counter + action.number,
        incrementNum: state.incrementNum + 1
      }
    case 'DEC':
      return {
        ...state,
        counter: state.counter - action.number,
        decrementNum: state.decrementNum + 1
      }
    case 'RES':
      return initialState
    default:
      return state
  }
}
  
export default move
