import enqueueCreateGo from 'actions/ui/snackbars/enqueueCreateGo';
import enqueueCreateGoFail from 'actions/ui/snackbars/enqueueCreateGoFail';
import createGo from './requests/createGo';

export default go => dispatch =>
	dispatch(createGo(go)).then(({error}) => {
		if (error) {
			dispatch(enqueueCreateGoFail(go.go));
		} else {
			dispatch(enqueueCreateGo(go.go));
		}
	});
