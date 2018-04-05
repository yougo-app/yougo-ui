import classNames from 'classnames';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	withStyles,
} from 'material-ui';
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
			<DialogTitle id={`${name}${titleSuffix}`} className={classes.title}>{title}</DialogTitle>
			<DialogContent className={classes.content}>
				<DialogContentText>
					{description}
				</DialogContentText>
				{children}
			</DialogContent>
			<DialogActions className={classes.actions}>
				<Button color="secondary" onClick={onClose}>Cancel</Button>
				<Button type="submit" color="primary">Submit</Button>
			</DialogActions>
		</div>
	);


	return (
		<Dialog
			className={classNames(classes.root, className)}
			aria-labelledby={`${name}${titleSuffix}`}
			{...other}
		>
			{form
				? <form onSubmit={form.handleSubmit(onSubmit)}>{dialogContent}</form>
				: dialogContent
			}
		</Dialog>
	);
};


ReduxFormDialog.defaultProps = {
	title: '',
	description: '',
	className: '',
};

export default withStyles(styles)(ReduxFormDialog);
