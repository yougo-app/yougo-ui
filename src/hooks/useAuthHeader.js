import {useAuth} from 'oidc-react';

export default function useAuthHeader() {
	return {
		headers: {
			Authorization: `Bearer ${useAuth().userData.id_token}`,
		},
	};
}
