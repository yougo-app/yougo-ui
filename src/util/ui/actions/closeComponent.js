import createAction from 'redux-actions/es/createAction';
import {CLOSE_COMPONENT} from '../constants/actionTypes';

const action = createAction(CLOSE_COMPONENT);
export default (id, props) => action({id, props});
