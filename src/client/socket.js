import io from "socket.io-client"
const socket = io("http://localhost:8081/")
// const socket = io("http://e2r3p21.42.fr:8081/")

export { socket }
