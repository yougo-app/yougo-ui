import PropTypes from 'prop-types';
import {object, string} from 'yup';

export const goSchema = object().shape({
	id: string(),
	alias: string()
		.trim()
		.required()
		.matches(/^[\w-]+$/, {excludeEmptyString: true, message: 'Go must not contain whitespace'}),
	href: string().trim().required().url(),
});

export const goPropType = PropTypes.shape({
	id: PropTypes.string.isRequired,
	alias: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
});
