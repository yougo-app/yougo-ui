import enqueueSnackbar from 'actions/ui/enqueueSnackbar';

const enqueueEditGo = (go) => enqueueSnackbar(`Updated '${go.go}'`);
export default enqueueEditGo;
