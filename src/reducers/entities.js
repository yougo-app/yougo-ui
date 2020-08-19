import {prefix} from 'constants/actionTypes';
import {merge} from 'lodash';

const entities = (state = {}, {type, payload}) =>
	type.startsWith(prefix) && payload && 'entities' in payload ? merge({}, state, payload.entities) : state;
export default entities;
