import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';
import GoForm from 'components/GoForm';
import PropTypes from 'prop-types';
import GoPropType from 'propTypes/GoPropType';
import React from 'react';
import {FormContext, useForm} from 'react-hook-form';

const styles = {
	root: {},
};

export const formName = 'edit-go-form';

const EditGoDialog = ({classes, className, go, onClose, onSubmit, ...other}) => {
	const formMethods = useForm({mode: 'onBlur'});
	return (
		<Dialog
			open
			fullWidth
			onClose={onClose}
			className={classNames(classes.root, className)}
			{...other}
		>
			<DialogTitle>Update {go && go.go}</DialogTitle>
			<DialogContent>
				<FormContext {...formMethods}>
					<GoForm go={go} form={formName} onSubmit={onSubmit} />
				</FormContext>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose}>Cancel</Button>
				<Button color="secondary" type="submit" form={formName}>
					Update
				</Button>
			</DialogActions>
		</Dialog>
	);
};

EditGoDialog.propTypes = {
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
	go: GoPropType.isRequired,
	onClose: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(EditGoDialog);
