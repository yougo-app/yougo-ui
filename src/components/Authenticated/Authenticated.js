import {isEmpty} from 'lodash';
import {useAuth} from 'oidc-react';
import PropTypes from 'prop-types';

const Authenticated = ({fallback, children}) => (isEmpty(useAuth().userData) ? fallback : children);

Authenticated.propTypes = {
	fallback: PropTypes.node,
	children: PropTypes.node.isRequired,
};

Authenticated.defaultProps = {
	fallback: null,
};

export default Authenticated;
