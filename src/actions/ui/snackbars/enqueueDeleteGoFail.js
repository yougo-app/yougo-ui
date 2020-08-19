import enqueueSnackbar from 'actions/ui/enqueueSnackbar';

const enqueueDeleteGoFail = (name) => enqueueSnackbar(`Can't delete '${name}'`, {variant: 'error'});
export default enqueueDeleteGoFail;
