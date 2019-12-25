import {createAction} from 'redux-actions';
import {CLOSE_COMPONENT} from 'util/ui/constants/actionTypes';

const action = createAction(CLOSE_COMPONENT);
export default (id, props) => action({id, props});
