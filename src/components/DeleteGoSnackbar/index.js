import {connect} from 'react-redux';
import Components from '../../constants/Components';
import reduxOpenComponent from '../../util/ui/reduxOpenComponent';
import DeleteGoSnackbar from './DeleteGoSnackbar';

const mapDispatchToProps = () => ({
	action: () => {
		// eslint-disable-next-line no-console
		console.log('Undo delete...');
	},
});

export default reduxOpenComponent(Components.DELETE_GO)(
	connect(
		null,
		mapDispatchToProps,
	)(DeleteGoSnackbar),
);
