import makeValidator from './makeValidator';

export default makeValidator(value => Boolean(value), 'Required');
