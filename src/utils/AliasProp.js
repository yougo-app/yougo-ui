import PropTypes from 'prop-types';

export default PropTypes.shape({
	id: PropTypes.string.isRequired,
	alias: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	icon: PropTypes.string,
});
