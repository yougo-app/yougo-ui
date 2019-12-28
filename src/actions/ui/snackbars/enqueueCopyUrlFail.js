import enqueueActionSnackbar from 'actions/ui/enqueueActionSnackbar';

export default () => enqueueActionSnackbar("Can't copy URL", {variant: 'error'});
