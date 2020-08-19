import enqueueDeleteGo from 'actions/ui/snackbars/enqueueDeleteGo';
import enqueueDeleteGoFail from 'actions/ui/snackbars/enqueueDeleteGoFail';
import deleteGoReq from './requests/deleteGo';

const deleteGo = (go) => (dispatch) =>
	dispatch(deleteGoReq(go.id)).then(({error}) => {
		if (error) {
			dispatch(enqueueDeleteGoFail(go.go));
		} else {
			dispatch(enqueueDeleteGo(go.go));
		}
	});
export default deleteGo;
