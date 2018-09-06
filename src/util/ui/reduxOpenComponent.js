import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import closeComponent from './actions/closeComponent';
import getComponentProps from './selectors/getComponentProps';
import isComponentOpen from './selectors/isComponentOpen';

export default componentId => {
	const mapState = state => ({
		open: isComponentOpen(state, componentId),
		...getComponentProps(state, componentId),
	});

	const mapDispatch = dispatch => ({
		...bindActionCreators({onClose: () => closeComponent(componentId)}, dispatch),
	});

	return WrappedComponent =>
		connect(
			mapState,
			mapDispatch,
		)(WrappedComponent);
};
