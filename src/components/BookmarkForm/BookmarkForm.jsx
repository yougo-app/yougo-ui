import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {Field, propTypes as FormPropTypes} from 'redux-form';
import {TextField} from 'redux-form-material-ui';

const styles = {
	root: {},
};

const BookmarkForm = ({classes, className, dispatch, form, formName, onSubmit, ...other}) => (
	<form
		id={formName}
		className={classNames(classes.root, className)}
		onSubmit={form.handleSubmit(onSubmit)}
		{...other}
	>
		<div>
			<Field component={TextField} name="alias" label="Alias" placeholder="google" />
		</div>
		<div>
			<Field component={TextField} name="href" label="URL" placeholder="http://example.com" />
		</div>
	</form>
);

BookmarkForm.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	classes: PropTypes.object.isRequired,
	// eslint-disable-next-line react/require-default-props
	className: PropTypes.string,
	dispatch: PropTypes.func.isRequired,
	form: PropTypes.shape(FormPropTypes.form).isRequired,
	formName: PropTypes.string,
	onSubmit: PropTypes.func.isRequired,
};

BookmarkForm.defaultProps = {
	formName: 'bookmark-form',
};

export default withStyles(styles)(BookmarkForm);
