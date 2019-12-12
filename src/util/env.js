import get from 'lodash.get';

export default (key, def) => get(window, ['env', key], process.env[key] || def);
