import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {Field, propTypes as FormPropTypes} from 'redux-form';
import {TextField} from 'redux-form-material-ui';
import isGo from '../../utils/validators/isGo';
import isRequired from '../../utils/validators/isRequired';
import isUrl from '../../utils/validators/isUrl';

const styles = {
	root: {},
};

const GoForm = ({classes, className, form, formName, onSubmit, ...other}) => (
	<form
		id={formName}
		className={classNames(classes.root, className)}
		onSubmit={form.handleSubmit}
		{...other}
	>
		<Field
			component={TextField}
			name="go"
			label="Go shortcut"
			placeholder="example"
			validate={[isRequired, isGo]}
			fullWidth
			margin="dense"
		/>
		<Field
			component={TextField}
			validate={[isRequired, isUrl]}
			name="href"
			label="URL"
			placeholder="http://example.com"
			fullWidth
			margin="dense"
		/>
	</form>
);

GoForm.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	classes: PropTypes.object.isRequired,
	// eslint-disable-next-line react/require-default-props
	className: PropTypes.string,
	form: PropTypes.shape(FormPropTypes.form).isRequired,
	formName: PropTypes.string,
	onSubmit: PropTypes.func.isRequired,
};

GoForm.defaultProps = {
	formName: 'go-form',
};

export default withStyles(styles)(GoForm);
