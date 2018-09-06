import createAction from 'redux-actions/es/createAction';
import ActionTypes from '../constants/ActionTypes';

const action = createAction(ActionTypes.OPEN_COMPONENT);
export default (id, props) => action({id, props});
