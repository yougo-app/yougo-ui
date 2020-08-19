import {normalize} from 'normalizr';
import {getJSON} from 'redux-api-middleware';

const normalizeApiResponse = (response, schema) => getJSON(response).then((json) => normalize(json, schema));
export default normalizeApiResponse;
