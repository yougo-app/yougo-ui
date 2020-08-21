import {get} from 'lodash';
import {useAuth} from 'oidc-react';
import React from 'react';

const GosPage = () => {
	// const filter = useSearchContext();
	// const {isLoading, data: gos} = GosAPI.findFiltered(filter);
	const auth = useAuth();

	console.log(auth);

	return <span>{get(auth, 'userData.profile.name')}</span>;

	// if (isLoading) {
	// 	return <LoadingState />;
	// }
	//
	// if (gos.length === 0) {
	// 	return <NoGosState />;
	// }
	//
	// return <GoList gos={gos} />;
};

export default GosPage;
