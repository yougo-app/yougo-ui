import PropTypes from 'prop-types';
import {object, string} from 'yup';

export const goSchema = object().shape({
	id: string(),
	go: string().required().min(1),
	href: string().required().url(),
});

export const goPropType = PropTypes.shape({
	id: PropTypes.string.isRequired,
	go: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
});
