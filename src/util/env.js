import get from 'lodash.get';

const env = (key, def) => get(window, ['env', key], process.env[key] || def);
export default env;
