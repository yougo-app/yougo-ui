import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {propTypes as FormPropTypes} from 'redux-form';

const titleSuffix = '-form-dialog-title';

export const styles = {
	root: {},
	title: {},
	content: {},
	actions: {},
};

const ReduxFormDialog = ({
	children,
	classes,
	className,
	description,
	form,
	name,
	onClose,
	onSubmit,
	title,
	...other
}) => {
	const dialogContent = (
		<React.Fragment>
			<DialogTitle id={`${name}${titleSuffix}`} className={classes.title}>
				{title}
			</DialogTitle>
			<DialogContent className={classes.content}>
				<DialogContentText>{description}</DialogContentText>
				{children}
			</DialogContent>
			<DialogActions className={classes.actions}>
				<Button color="secondary" onClick={onClose}>
					Cancel
				</Button>
				<Button type="submit" color="primary">
					Submit
				</Button>
			</DialogActions>
		</React.Fragment>
	);

	return (
		<Dialog
			className={classNames(classes.root, className)}
			aria-labelledby={`${name}${titleSuffix}`}
			onClose={onClose}
			{...other}
		>
			{form ? <form onSubmit={form.handleSubmit(onSubmit)}>{dialogContent}</form> : dialogContent}
		</Dialog>
	);
};

ReduxFormDialog.propTypes = {
	children: PropTypes.node.isRequired,
	// eslint-disable-next-line react/forbid-prop-types
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
	description: PropTypes.string,
	// eslint-disable-next-line react/require-default-props
	form: PropTypes.shape(FormPropTypes.form),
	name: PropTypes.string.isRequired,
	onClose: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
};

ReduxFormDialog.defaultProps = {
	description: '',
	className: '',
};

export default withStyles(styles)(ReduxFormDialog);
