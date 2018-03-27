export const moveLeft = () => {
  socket.emit("moveLeft")
}

export const moveRight = () => {
  socket.emit("moveRight")
}

export const moveDown = () => {
  socket.emit("moveDown")
}

export const moveUp = () => {
  socket.emit("moveUp")
}
