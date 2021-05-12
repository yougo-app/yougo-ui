import {useAuth0} from '@auth0/auth0-react';

export default function useAccessToken() {
	const {getAccessTokenSilently} = useAuth0();
	return getAccessTokenSilently();
}
