import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import openModal from '../../actions/openModal';
import Modals from '../../constants/Modals';
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
