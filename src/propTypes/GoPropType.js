import PropTypes from 'prop-types';

export default PropTypes.shape({
	id: PropTypes.string.isRequired,
	go: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
});
