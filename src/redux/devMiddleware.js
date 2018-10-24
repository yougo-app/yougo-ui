import logger from 'redux-logger';
import middleware from './middleware';

export default [...middleware, logger];
