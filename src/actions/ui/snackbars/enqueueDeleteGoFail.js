import enqueueSnackbar from 'actions/ui/enqueueSnackbar';

export default name => enqueueSnackbar(`Can't delete '${name}'`, {variant: 'error'});
