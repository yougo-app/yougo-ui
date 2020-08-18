import enqueueActionSnackbar from 'actions/ui/enqueueActionSnackbar';

export default (go) =>
	enqueueActionSnackbar(`Can't update '${go.go}'`, {
		variant: 'error',
		actionText: 'Retry',
		action: () => {
			// eslint-disable-next-line no-console
			console.log('Retrying...');
		},
	});
