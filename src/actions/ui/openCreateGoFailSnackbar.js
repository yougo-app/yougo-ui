import {SNACKBAR} from '../../constants/components';
import openComponent from '../../util/ui/actions/openComponent';

export default go =>
	openComponent(SNACKBAR, {
		message: `Can't create '${go.go}'`,
		actionText: 'Retry',
		actionFunc: () => {
			// eslint-disable-next-line no-console
			console.log('Retrying...');
		},
	});
