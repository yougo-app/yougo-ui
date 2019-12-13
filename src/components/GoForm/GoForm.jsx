import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';
import TextField from '../common/TextField';
import PropTypes from 'prop-types';
import React from 'react';
import {Field, propTypes as FormPropTypes} from 'redux-form';
import isGo from '../../util/validators/isGo';
import isRequired from '../../util/validators/isRequired';
import isUrl from '../../util/validators/isUrl';

const styles = {
	root: {},
};

const GoForm = ({classes, className, form, onSubmit, ...other}) => (
	<form
		id={form.form}
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
			autoFocus
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
	onSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(GoForm);
