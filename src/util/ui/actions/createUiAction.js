import {createAction} from 'redux-actions';

export default actionType => {
	const action = createAction(actionType);
	return (id, props) => action({id, props});
};
