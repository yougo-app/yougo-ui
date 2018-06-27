/* eslint-disable react/prop-types */
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';
import React from 'react';

const titleSuffix = '-form-dialog-title';

export const styles = {
	root: {},
	title: {},
	content: {},
	actions: {},
};

const ReduxFormDialog = ({
	name,
	title,
	description,
	onClose,
	onSubmit,
	className,
	classes,
	form,
	children,

	/* remove/ignore these broken form props from other */
	autofill,
	clearAsyncError,
	clearFields,
	clearSubmitErrors,
	pure,
	submit,
	triggerSubmit,

	...other
}) => {
	const dialogContent = (
		<div>
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
		</div>
	);

	return (
		<Dialog
			className={classNames(classes.root, className)}
			aria-labelledby={`${name}${titleSuffix}`}
			{...other}
		>
			{form ? <form onSubmit={form.handleSubmit(onSubmit)}>{dialogContent}</form> : dialogContent}
		</Dialog>
	);
};

ReduxFormDialog.defaultProps = {
	title: '',
	description: '',
	className: '',
};

export default withStyles(styles)(ReduxFormDialog);
