import { connect } from 'react-redux'
import { createUser } from '../actions/user'
import Connection from '../components/Connection'


const mapStateToProps = state => {
	return { }
}

const mapDispatchToProps = dispatch => {
  return {
    pushUser: (username) => {
			dispatch(createUser(username))
		}
  }
}

const FinalConnection = connect(
	mapStateToProps,
  mapDispatchToProps
)(Connection)

export default FinalConnection