import Box from '@material-ui/core/Box';
import {Field, Form, Formik} from 'formik';
import {TextField} from 'formik-material-ui';
import PropTypes from 'prop-types';
import React from 'react';
import {goPropType, goSchema} from 'util/types';

const initialValues = {
	go: '',
	href: '',
};

const GoForm = ({className, onSubmit, presetValues, innerRef, ...other}) => {
	return (
		<Formik
			initialValues={presetValues || initialValues}
			validationSchema={goSchema}
			onSubmit={onSubmit}
			innerRef={innerRef}
			{...other}
		>
			<Form>
				<Field
					component={TextField}
					name="go"
					label="Go shortcut"
					placeholder="example"
					fullWidth
				/>
				<Field
					component={TextField}
					name="href"
					label="URL"
					placeholder="http://example.com"
					fullWidth
				/>
				<Box hidden>
					<button type="submit">Submit</button>
				</Box>
			</Form>
		</Formik>
	);
};

GoForm.propTypes = {
	className: PropTypes.string,
	presetValues: goPropType,
	innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({current: PropTypes.any})]),
	onSubmit: PropTypes.func.isRequired,
};

export default GoForm;
