import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {Field, propTypes as FormPropTypes} from 'redux-form';
import {TextField} from 'redux-form-material-ui';
import isAlias from '../../utils/validators/isAlias';
import isRequired from '../../utils/validators/isRequired';
import isUrl from '../../utils/validators/isUrl';

const styles = {
	root: {},
};

const BookmarkForm = ({classes, className, form, formName, onSubmit, ...other}) => (
	<form
		id={formName}
		className={classNames(classes.root, className)}
		onSubmit={form.handleSubmit}
		{...other}
	>
		<Field
			component={TextField}
			name="alias"
			label="Alias"
			placeholder="google"
			validate={[isRequired, isAlias]}
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

BookmarkForm.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	classes: PropTypes.object.isRequired,
	// eslint-disable-next-line react/require-default-props
	className: PropTypes.string,
	form: PropTypes.shape(FormPropTypes.form).isRequired,
	formName: PropTypes.string,
	onSubmit: PropTypes.func.isRequired,
};

BookmarkForm.defaultProps = {
	formName: 'bookmark-form',
};

export default withStyles(styles)(BookmarkForm);
