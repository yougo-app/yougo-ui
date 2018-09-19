import {connect} from 'react-redux';
import {bindActionCreators, compose} from 'redux';
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

const hoc = compose(
	reduxOpenComponent(DELETE_GO_SNACK),
	connect(
		null,
		mapDispatchToProps,
	),
);

export default hoc(DeleteGoSnackbar);
