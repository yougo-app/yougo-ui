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

const CreateGoDialog = ({classes, className, hideModal, onSubmit, ...other}) => {
	const formMethods = useForm({mode: 'onBlur'});

	return (
		<Dialog
			open
			fullWidth
			onClose={hideModal}
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
				<Button onClick={hideModal}>Cancel</Button>
				<Button color="secondary" type="submit" form={formName}>
					Add
				</Button>
			</DialogActions>
		</Dialog>
	);
};

CreateGoDialog.propTypes = {
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
	hideModal: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(CreateGoDialog);
