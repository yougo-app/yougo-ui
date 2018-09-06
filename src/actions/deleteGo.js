import openDeleteGoFailSnackbar from './openDeleteGoFailSnackbar';
import openDeleteGoSnackbar from './openDeleteGoSnackbar';
import deleteGo from './requests/deleteGo';

export default go => dispatch =>
	dispatch(deleteGo(go.id)).then(({error}) => {
		if (error) {
			dispatch(openDeleteGoFailSnackbar(go));
		} else {
			dispatch(openDeleteGoSnackbar(go));
		}
	});
