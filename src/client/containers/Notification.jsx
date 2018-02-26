import { connect } from 'react-redux'
import { addNotif,  } from '../actions/notification'
import Notification from '../components/Connection'


const mapStateToProps = state => {
	return { }
}

const mapDispatchToProps = dispatch => {
  return {
    closeNotif: () => {
			dispatch(createUser(username, socket))
		}
  }
}

const FinalConnection = connect(
	mapStateToProps,
  mapDispatchToProps
)(Notification)

export default FinalConnection