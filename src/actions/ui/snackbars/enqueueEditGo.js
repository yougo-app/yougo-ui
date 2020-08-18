import enqueueSnackbar from 'actions/ui/enqueueSnackbar';

export default (go) => enqueueSnackbar(`Updated '${go.go}'`);
