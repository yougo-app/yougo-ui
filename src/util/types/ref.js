import PropTypes from 'prop-types';

// eslint-disable-next-line react/forbid-prop-types
const ref = PropTypes.oneOfType([PropTypes.func, PropTypes.shape({current: PropTypes.any})]);
export default ref;
