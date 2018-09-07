import {connect} from 'react-redux';
import {DELETE_GO_SNACK} from '../../constants/components';
import reduxOpenComponent from '../../util/ui/reduxOpenComponent';
import DeleteGoSnackbar from './DeleteGoSnackbar';

const mapDispatchToProps = () => ({
	action: () => {
		// eslint-disable-next-line no-console
		console.log('Undo delete...');
	},
});

export default reduxOpenComponent(DELETE_GO_SNACK)(
	connect(
		null,
		mapDispatchToProps,
	)(DeleteGoSnackbar),
);
