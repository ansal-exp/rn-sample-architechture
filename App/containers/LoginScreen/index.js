import {connect } from 'react-redux'
import { ActionCreators } from '../../actions'
import * as reducerActions  from '../../actions/reducerActions'
import { bindActionCreators } from 'redux'
import * as actionTypes from '../../actions/ActionTypes'
import LoginScreen from './LoginScreen'

function mapStateToProps(state) {
    return {
        isLoading : state.loginReducer.isLoading,
    }
}
  
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(reducerActions, dispatch),
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);