import GoList from 'components/GoList';
import LoadingState from 'components/LoadingState';
import {useSearchContext} from 'context/SearchContext';
import {useFilteredGos} from 'hooks';
import React from 'react';

const GosPage = () => {
	const {isLoading, data: gos} = useFilteredGos(useSearchContext());

	if (isLoading) {
		return <LoadingState />;
	}

	return <GoList gos={gos} />;
};

export default GosPage;
