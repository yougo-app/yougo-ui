import createAction from 'redux-actions/es/createAction';
import {OPEN_COMPONENT} from '../constants/actionTypes';

const action = createAction(OPEN_COMPONENT);
export default (id, props) => action({id, props});
