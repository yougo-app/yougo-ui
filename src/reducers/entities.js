import {prefix} from 'constants/actionTypes';
import merge from 'lodash.merge';

export default (state = {}, {type, payload}) =>
	type.startsWith(prefix) && payload && 'entities' in payload ? merge({}, state, payload.entities) : state;
