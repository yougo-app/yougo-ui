import {connect} from 'react-redux';
import {compose} from 'redux';
import {DELETE_GO_FAIL_SNACK} from '../../constants/components';
import reduxOpenComponent from '../../util/ui/reduxOpenComponent';
import DeleteGoSnackbar from './DeleteGoFailSnackbar';

const mapDispatchToProps = () => ({
	action: () => {
		// eslint-disable-next-line no-console
		console.log('Retry delete...');
	},
});

const hoc = compose(
	reduxOpenComponent(DELETE_GO_FAIL_SNACK),
	connect(
		null,
		mapDispatchToProps,
	),
);

export default hoc(DeleteGoSnackbar);
