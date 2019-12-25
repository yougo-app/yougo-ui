import {createAction} from 'redux-actions';
import {OPEN_COMPONENT} from 'util/ui/constants/actionTypes';

const action = createAction(OPEN_COMPONENT);
export default (id, props) => action({id, props});
