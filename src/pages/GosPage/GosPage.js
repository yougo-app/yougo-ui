import GosAPI from 'api/gos';
import GoList from 'components/GoList';
import LoadingState from 'components/LoadingState';
import NoGosState from 'components/NoGosState';
import {useSearchContext} from 'context/SearchContext';
import React from 'react';

const GosPage = () => {
	const filter = useSearchContext();
	const {isLoading, data: gos} = GosAPI.findFiltered(filter);

	if (isLoading) {
		return <LoadingState />;
	}

	if (gos.length === 0) {
		return <NoGosState />;
	}

	return <GoList gos={gos} />;
};

export default GosPage;
