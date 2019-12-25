import {SNACKBAR} from 'constants/components';
import openComponent from 'util/ui/actions/openComponent';

export default () =>
	openComponent(SNACKBAR, {
		message: "Can't copy URL",
	});
