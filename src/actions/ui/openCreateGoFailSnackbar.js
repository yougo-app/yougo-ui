import {SNACKBAR} from 'constants/components';
import openComponent from 'util/ui/actions/openComponent';

export default name =>
	openComponent(SNACKBAR, {
		message: `Can't create '${name}'`,
		actionText: 'Retry',
		actionFunc: () => {
			// eslint-disable-next-line no-console
			console.log('Retrying...');
		},
	});
