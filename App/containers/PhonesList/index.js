import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as reducerActions from '../../actions/reducerActions';
import PhonesList from './PhonesList';

function mapStateToProps(state) {
  return {
    phones: state.phonesReducer.phones,
    isPhonesLoading: state.phonesReducer.isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(reducerActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PhonesList);
