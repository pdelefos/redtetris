import { connect } from "react-redux"
import { createUser } from "../actions/user"
import { bindActionCreators } from "redux"
import Connection from "../components/Connection"

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    pushUser: bindActionCreators(createUser, dispatch)
  }
}

const FinalConnection = connect(mapStateToProps, mapDispatchToProps)(
  Connection
)

export default FinalConnection
