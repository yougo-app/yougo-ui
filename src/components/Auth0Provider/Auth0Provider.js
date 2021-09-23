/* eslint-disable react/prop-types */
import {Auth0Provider as RealAuth0Provider} from '@auth0/auth0-react';
import {useNavigate} from 'react-router-dom';
import {API_URL, OIDC_AUTHORITY, OIDC_CLIENT_ID, OIDC_REDIRECT_URI} from 'util/env';

const Auth0Provider = ({children}) => {
	const navigate = useNavigate();

	const onRedirectCallback = (appState) => {
		navigate(appState?.returnTo || window.location.pathname, {replace: true});
	};

	return (
		<RealAuth0Provider
			domain={OIDC_AUTHORITY}
			clientId={OIDC_CLIENT_ID}
			redirectUri={OIDC_REDIRECT_URI}
			audience={API_URL}
			cacheLocation="localstorage"
			useRefreshTokens="true"
			onRedirectCallback={onRedirectCallback}
		>
			{children}
		</RealAuth0Provider>
	);
};

export default Auth0Provider;
