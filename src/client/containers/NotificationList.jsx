import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as NotificationActions from '../actions/notification'
import NotificationList from '../components/NotificationList'


const mapStateToProps = state => {
	return {
    notifications: state.notifications
  }
}

const mapDispatchToProps = dispatch => {
	NotificationActions.addNotification(dispatch)
  return {
    actions: bindActionCreators(NotificationActions, dispatch) 
  }
}

const FinalConnection = connect(
	mapStateToProps,
  mapDispatchToProps
)(NotificationList)

export default FinalConnection