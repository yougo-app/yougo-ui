import ApiClient from 'api/ApiClient';
import useAccessToken from 'hooks/useAccessToken';

export default function useApiClient() {
	return useAccessToken().then((token) => new ApiClient({token}));
}
