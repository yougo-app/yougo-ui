import logger from 'redux-logger';

import middleware from './middleware';

const devMiddleware = [...middleware, logger];
export default devMiddleware;
