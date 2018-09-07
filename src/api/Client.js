import {API_URL} from '../constants/defaults';
import env from '../util/env';
import Api from './Api';

export default new Api({
	url: env('API_URL', API_URL),
});
