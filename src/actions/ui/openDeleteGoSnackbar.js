import {SNACKBAR} from '../../constants/components';
import openComponent from '../../util/ui/actions/openComponent';
import undoDelete from '../undoDelete';

export default go => dispatch =>
	dispatch(
		openComponent(SNACKBAR, {
			message: `Deleted '${go.go}'`,
			actionText: 'Undo',
			actionFunc: () => dispatch(undoDelete()),
		}),
	);
