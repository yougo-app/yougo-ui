import validator from 'validator';
import makeValidator from './makeValidator';

export default makeValidator(
	(value) => validator.matches(value, /^[\w-]*$/),
	'Can only contain alphanumeric characters (a-z, A-Z, 0-9), dashes & underscores'
);
