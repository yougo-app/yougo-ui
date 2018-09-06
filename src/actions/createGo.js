import openCreateGoFailSnackbar from './openCreateGoFailSnackbar';
import openCreateGoSnackbar from './openCreateGoSnackbar';
import createGo from './requests/createGo';

export default go => dispatch =>
	dispatch(createGo(go)).then(({error}) => {
		if (error) {
			dispatch(openCreateGoFailSnackbar(go));
		} else {
			dispatch(openCreateGoSnackbar(go));
		}
	});
