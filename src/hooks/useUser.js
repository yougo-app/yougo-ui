import {isEmpty} from 'lodash';
import {useAuth} from 'oidc-react';

export default function useUser() {
	const auth = useAuth();
	return isEmpty(auth.userData) ? null : auth.userData.profile;
}
