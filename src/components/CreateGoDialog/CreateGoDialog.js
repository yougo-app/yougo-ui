import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';
import GoForm from 'components/GoForm';
import PropTypes from 'prop-types';
import React from 'react';
import {FormContext, useForm} from 'react-hook-form';

const styles = {
	root: {},
};

export const formName = 'create-go-form';

const CreateGoDialog = ({classes, className, onClose, onSubmit, ...other}) => {
	const formMethods = useForm({mode: 'onBlur'});

	return (
		<Dialog
			open
			fullWidth
			onClose={onClose}
			className={classNames(classes.root, className)}
			{...other}
		>
			<DialogTitle>Add a go</DialogTitle>
			<DialogContent>
				<FormContext {...formMethods}>
					<GoForm form={formName} onSubmit={onSubmit} />
				</FormContext>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose}>Cancel</Button>
				<Button color="secondary" type="submit" form={formName}>
					Add
				</Button>
			</DialogActions>
		</Dialog>
	);
};

CreateGoDialog.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	classes: PropTypes.object.isRequired,
	// eslint-disable-next-line react/require-default-props
	className: PropTypes.string,
	onClose: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(CreateGoDialog);
