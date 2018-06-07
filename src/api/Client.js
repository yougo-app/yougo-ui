import Defaults from '../constants/Defaults';
import Env from '../constants/Env';
import Api from './Api';

export default new Api({
	url: Env.API_URL || Defaults.API_URL,
});
