import enqueueActionSnackbar from 'actions/ui/enqueueActionSnackbar';

const enqueueCreateGoFail = (go) =>
	enqueueActionSnackbar(`Can't create '${go.go}'`, {
		variant: 'error',
		actionText: 'Retry',
		action: () => {
			// eslint-disable-next-line no-console
			console.log('Retrying...');
		},
	});
export default enqueueCreateGoFail;
