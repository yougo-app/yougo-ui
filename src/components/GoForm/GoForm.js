import {Box, TextField} from '@mui/material';
import {object} from 'prop-types';
import React from 'react';

const GoForm = ({formik, ...props}) => (
	<form onSubmit={formik.handleSubmit} {...props}>
		<TextField
			id="alias"
			name="alias"
			label="Alias"
			value={formik.values.alias}
			onChange={formik.handleChange}
			onBlur={formik.handleBlur}
			error={Boolean(formik.touched.alias && formik.errors.alias)}
			helperText={formik.touched.alias && formik.errors.alias}
			fullWidth
			autoFocus
			margin="dense"
			variant="standard"
		/>
		<TextField
			id="href"
			name="href"
			label="URL"
			value={formik.values.href}
			onChange={formik.handleChange}
			onBlur={formik.handleBlur}
			error={Boolean(formik.touched.href && formik.errors.href)}
			helperText={formik.touched.href && formik.errors.href}
			fullWidth
			margin="dense"
			variant="standard"
		/>
		<Box hidden>
			<button type="submit">Submit</button>
		</Box>
	</form>
);

GoForm.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	formik: object.isRequired,
};

export default GoForm;
