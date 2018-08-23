import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import closeMenu from '../../actions/closeMenu';
import openDeleteGoDialog from '../../actions/openDeleteGoDialog';
import GoMenu from './GoMenu';

const mapDispatchToProps = (dispatch, {go}) => ({
	...bindActionCreators(
		{
			onClose: closeMenu,
			onDelete: () => openDeleteGoDialog(go),
		},
		dispatch,
	),
});

export default connect(
	null,
	mapDispatchToProps,
)(GoMenu);
