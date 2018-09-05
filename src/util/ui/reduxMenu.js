import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import closeMenu from './actions/closeMenu';
import getMenuProps from './selectors/getMenuProps';
import isMenuOpen from './selectors/isMenuOpen';

export default menuId => {
	const mapState = state => ({
		open: isMenuOpen(state, menuId),
		...getMenuProps(state, menuId),
	});

	const mapDispatch = dispatch => ({
		...bindActionCreators({onClose: () => closeMenu(menuId)}, dispatch),
	});

	return WrappedComponent =>
		connect(
			mapState,
			mapDispatch,
		)(WrappedComponent);
};
