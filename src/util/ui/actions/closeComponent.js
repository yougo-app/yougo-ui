import createAction from 'redux-actions/es/createAction';
import ActionTypes from '../constants/ActionTypes';

const action = createAction(ActionTypes.CLOSE_COMPONENT);
export default (id, props) => action({id, props});
