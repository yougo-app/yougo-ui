import validator from 'validator';

import makeValidator from './makeValidator';

export default makeValidator((value) => validator.isURL(value), 'Invalid URL');
