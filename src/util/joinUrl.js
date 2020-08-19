import {trim} from 'lodash';

const joinURL = (...segments) =>
	segments
		.flat()
		.map((s) => trim(s, '/'))
		.join('/');

export default joinURL;
