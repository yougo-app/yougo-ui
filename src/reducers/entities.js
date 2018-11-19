import merge from 'lodash.merge';
import {prefix} from '../constants/actionTypes';

export default (state = {}, {type, payload}) =>
	type.startsWith(prefix) && payload && 'entities' in payload
		? merge({}, state, payload.entities)
		: state;
