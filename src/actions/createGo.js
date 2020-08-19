import enqueueCreateGo from 'actions/ui/snackbars/enqueueCreateGo';
import enqueueCreateGoFail from 'actions/ui/snackbars/enqueueCreateGoFail';

import createGoReq from './requests/createGo';

const createGo = (go) => (dispatch) =>
	dispatch(createGoReq(go)).then(({error}) => {
		if (error) {
			dispatch(enqueueCreateGoFail(go.go));
		} else {
			dispatch(enqueueCreateGo(go.go));
		}
	});
export default createGo;
