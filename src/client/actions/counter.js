export const increment = number => {
  return {
    type: 'INC',
    number
  }
}

export const decrement = number => {
  return {
    type: 'DEC',
    number
  }
}

export const reset = () => {
  return {
    type: 'RES',
  }
}
