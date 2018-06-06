import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {openModal} from '../../actions/views';
import {Modals} from '../../constants';
import Header from './Header';

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			openCreateBookmarkDialog: () => openModal(Modals.CREATE_ALIAS),
		},
		dispatch,
	),
});

export default connect(
	null,
	mapDispatchToProps,
)(Header);
