import PropTypes from 'prop-types';

const alias = PropTypes.shape({
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	aliases: PropTypes.arrayOf(PropTypes.string).isRequired,
});

const children = PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]);

export default {
	alias,
	children,
};
