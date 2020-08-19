import enqueueActionSnackbar from 'actions/ui/enqueueActionSnackbar';

const enqueueCopyUrlFail = () => enqueueActionSnackbar("Can't copy URL", {variant: 'error'});
export default enqueueCopyUrlFail;
