import { connect } from 'react-redux'
import { createUser } from '../actions/user'
import Connection from '../components/Connection'
import { socket } from '../socket'


const mapStateToProps = state => {
}

const mapDispatchToProps = dispatch => {
  return {
    createUser: (username) => {
			console.log(username)
      dispatch(socket.emit('createUser', username))
		},
		notif: (message) => {
			socket.on('addUsername', (message) => {
				alert(message)
			})
		}
  }
}

const FinalConnection = connect(
  mapDispatchToProps
)(Connection)

export default FinalConnection