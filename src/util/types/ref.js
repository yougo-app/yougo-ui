import PropTypes from 'prop-types';

const ref = PropTypes.oneOfType([PropTypes.func, PropTypes.shape({current: PropTypes.any})]);
export default ref;
