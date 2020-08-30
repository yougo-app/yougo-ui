import Box from '@material-ui/core/Box';
import {Field, Form, Formik} from 'formik';
import {TextField} from 'formik-material-ui';
import PropTypes from 'prop-types';
import React from 'react';
import {goPropType, goSchema, ref} from 'util/types';

const defaultInitialValues = {
	alias: '',
	href: '',
};

const GoForm = ({className, onSubmit, initialValues, innerRef, ...other}) => {
	return (
		<Formik
			initialValues={initialValues || defaultInitialValues}
			validationSchema={goSchema}
			onSubmit={onSubmit}
			innerRef={innerRef}
			{...other}
		>
			<Form className={className}>
				<Field
					component={TextField}
					name="alias"
					label="Alias"
					placeholder="example"
					fullWidth
					autoFocus
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
	initialValues: goPropType,
	innerRef: ref.isRequired,
	onSubmit: PropTypes.func.isRequired,
};

GoForm.defaultProps = {
	className: undefined,
	initialValues: undefined,
};

export default GoForm;
