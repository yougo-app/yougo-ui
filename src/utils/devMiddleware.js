import {createLogger} from 'redux-logger';
import middleware from './middleware';

export default [...middleware, createLogger()];
