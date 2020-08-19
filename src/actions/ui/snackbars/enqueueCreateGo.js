import enqueueSnackbar from 'actions/ui/enqueueSnackbar';

const enqueueCreateGo = (name) => enqueueSnackbar(`Added '${name}'`);
export default enqueueCreateGo;
