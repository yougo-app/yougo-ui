import PropTypes from 'prop-types';

export default PropTypes.shape({
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	aliases: PropTypes.arrayOf(PropTypes.string).isRequired,
});
