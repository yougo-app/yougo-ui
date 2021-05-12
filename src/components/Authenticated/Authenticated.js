import {useAuth0} from '@auth0/auth0-react';
import PropTypes from 'prop-types';

const Authenticated = ({fallback, children}) => {
	const {isAuthenticated} = useAuth0();
	return isAuthenticated ? children : fallback;
};

Authenticated.propTypes = {
	fallback: PropTypes.node,
	children: PropTypes.node.isRequired,
};

Authenticated.defaultProps = {
	fallback: null,
};

export default Authenticated;
