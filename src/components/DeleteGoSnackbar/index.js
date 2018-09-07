import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import clearDeleted from '../../actions/clearDeleted';
import undoDelete from '../../actions/undoDelete';
import {DELETE_GO_SNACK} from '../../constants/components';
import reduxOpenComponent from '../../util/ui/reduxOpenComponent';
import DeleteGoSnackbar from './DeleteGoSnackbar';

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(
		{
			action: undoDelete,
			onExited: clearDeleted,
		},
		dispatch,
	),
});

export default reduxOpenComponent(DELETE_GO_SNACK)(
	connect(
		null,
		mapDispatchToProps,
	)(DeleteGoSnackbar),
);
