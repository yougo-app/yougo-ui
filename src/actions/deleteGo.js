import enqueueDeleteGo from 'actions/ui/snackbars/enqueueDeleteGo';
import enqueueDeleteGoFail from 'actions/ui/snackbars/enqueueDeleteGoFail';
import deleteGo from './requests/deleteGo';

export default go => dispatch =>
	dispatch(deleteGo(go.id)).then(({error}) => {
		if (error) {
			dispatch(enqueueDeleteGoFail(go.go));
		} else {
			dispatch(enqueueDeleteGo(go.go));
		}
	});
