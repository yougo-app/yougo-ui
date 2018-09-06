import {connect} from 'react-redux';
import Components from '../../constants/Components';
import reduxOpenComponent from '../../util/ui/reduxOpenComponent';
import DeleteGoSnackbar from './CreateGoFailSnackbar';

const mapDispatchToProps = () => ({
	action: () => {
		// eslint-disable-next-line no-console
		console.log('Retry delete...');
	},
});

export default reduxOpenComponent(Components.CREATE_GO_FAIL)(
	connect(
		null,
		mapDispatchToProps,
	)(DeleteGoSnackbar),
);
