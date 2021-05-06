import ApiClient from 'api/ApiClient';
import {useAuth} from 'oidc-react';

export default function useApiClient() {
	const token = useAuth().userData.id_token;
	return new ApiClient({token});
}
