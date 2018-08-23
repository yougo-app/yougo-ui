import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import openDeleteGoDialog from '../../actions/openDeleteGoDialog';
import GoActions from './GoActions';

const mapDispatchToProps = (dispatch, {go}) => ({
	...bindActionCreators(
		{
			onDelete: () => openDeleteGoDialog(go),
		},
		dispatch,
	),
});

export default connect(
	null,
	mapDispatchToProps,
)(GoActions);
