import openCreateGoFailSnackbar from './ui/openCreateGoFailSnackbar';
import openCreateGoSnackbar from './ui/openCreateGoSnackbar';
import createGo from './requests/createGo';

export default go => dispatch =>
	dispatch(createGo(go)).then(({error}) => {
		if (error) {
			dispatch(openCreateGoFailSnackbar(go.go));
		} else {
			dispatch(openCreateGoSnackbar(go.go));
		}
	});
