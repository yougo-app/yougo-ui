import {normalize} from 'normalizr';
import {getJSON} from 'redux-api-middleware';

export default (response, schema) => getJSON(response).then(json => normalize(json, schema));
