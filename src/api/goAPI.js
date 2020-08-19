/* eslint-disable react-hooks/rules-of-hooks */
import {useQuery} from 'react-query';

import {fetcher} from './base';

const GoAPI = Object.freeze({
	all: () => useQuery('gos', fetcher),
});

export default GoAPI;
