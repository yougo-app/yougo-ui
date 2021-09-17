import GoList from 'components/GoList';
import LoadingState from 'components/LoadingState';
import {useSearchContext} from 'context/SearchContext';
import {useApiGetGosFiltered} from 'hooks';
import React from 'react';

const GosPage = () => {
	const {isLoading, data: gos} = useApiGetGosFiltered(useSearchContext());

	if (isLoading) {
		return <LoadingState />;
	}

	return <GoList gos={gos} />;
};

export default GosPage;
