import {createAction} from 'redux-actions';
import {CLOSE_COMPONENT} from '../constants/actionTypes';

const action = createAction(CLOSE_COMPONENT);
export default (id, props) => action({id, props});
