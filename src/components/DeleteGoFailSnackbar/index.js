import {connect} from 'react-redux';
import {DELETE_GO_FAIL_SNACK} from '../../constants/components';
import reduxOpenComponent from '../../util/ui/reduxOpenComponent';
import DeleteGoSnackbar from './DeleteGoFailSnackbar';

const mapDispatchToProps = () => ({
	action: () => {
		// eslint-disable-next-line no-console
		console.log('Retry delete...');
	},
});

export default reduxOpenComponent(DELETE_GO_FAIL_SNACK)(
	connect(
		null,
		mapDispatchToProps,
	)(DeleteGoSnackbar),
);
