import LoadingState from 'components/LoadingState';
import {useGo} from 'hooks';
import React from 'react';
import {useParams} from 'react-router-dom';
import history from 'util/history';

const GoPage = () => {
	const {isLoading, isError} = useGo(useParams().go, {
		retry: false,
		onSuccess: (go) => {
			history.push(go.href);
		},
	});

	if (isError) {
		return <span>Something went wrong!</span>;
	}

	if (isLoading) {
		return <LoadingState />;
	}

	return <span>Redirecting shortly</span>;
};

export default GoPage;
