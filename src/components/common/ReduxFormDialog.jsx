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
			<DialogTitle id={`${name}${titleSuffix}`}>{title}</DialogTitle>
			<DialogContent>
				<DialogContentText>{description}</DialogContentText>
				{children}
			</DialogContent>
			<DialogActions>
				<Button color="secondary" onClick={onClose}>
					Cancel
				</Button>
				<Button color="primary" type="submit">
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
	// eslint-disable-next-line react/require-default-props
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
};

export default withStyles(styles)(ReduxFormDialog);
