import openDeleteGoFailSnackbar from './ui/openDeleteGoFailSnackbar';
import openDeleteGoSnackbar from './ui/openDeleteGoSnackbar';
import deleteGo from './requests/deleteGo';

export default go => dispatch =>
	dispatch(deleteGo(go.id)).then(({error}) => {
		if (error) {
			dispatch(openDeleteGoFailSnackbar(go.go));
		} else {
			dispatch(openDeleteGoSnackbar(go.go));
		}
	});
