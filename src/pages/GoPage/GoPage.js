import EmptyState from 'components/EmptyState';
import LoadingState from 'components/LoadingState';
import {useApiGetGo} from 'hooks';
import {useParams} from 'react-router-dom';

const GoPage = () => {
	const {isLoading, isError, data} = useApiGetGo(useParams().go, {
		retry: false,
		onSuccess: (go) => {
			window.location.replace(go.href);
		},
	});

	if (isError) {
		return <span>Something went wrong!</span>;
	}

	if (isLoading) {
		return <LoadingState />;
	}

	return (
		<EmptyState>
			You will be redirected to <a href={data.href}>{data.href}</a> shortly...
		</EmptyState>
	);
};

export default GoPage;
