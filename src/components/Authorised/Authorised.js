import {useUser} from 'hooks';
import PropTypes from 'prop-types';

const Authorised = ({fallback, children}) => (useUser() === null ? fallback : children);

Authorised.propTypes = {
	fallback: PropTypes.node,
	children: PropTypes.node.isRequired,
};

Authorised.defaultProps = {
	fallback: null,
};

export default Authorised;
