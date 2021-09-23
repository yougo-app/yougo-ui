import {useAuth0} from '@auth0/auth0-react';
import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

export default function useAutoLogin() {
	const location = useLocation();
	const {loginWithRedirect, isAuthenticated, isLoading} = useAuth0();
	useEffect(() => {
		const login = async () => {
			if (!isLoading && !isAuthenticated) {
				await loginWithRedirect({appState: {returnTo: location}});
			}
		};
		login().then();
	}, [isAuthenticated, isLoading, location, loginWithRedirect]);
}
