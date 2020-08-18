import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import editGo from 'actions/editGo';
import classNames from 'classnames';
import GoForm from 'components/GoForm';
import PropTypes from 'prop-types';
import GoPropType from 'propTypes/GoPropType';
import React from 'react';
import {FormContext, useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';

const styles = {
	root: {},
};

export const formName = 'edit-go-form';

const EditGoDialog = ({classes, className, go, hideModal, ...other}) => {
	const dispatch = useDispatch();
	const formMethods = useForm({mode: 'onBlur'});
	const onSubmit = (values) => {
		dispatch(editGo(values, go));
		hideModal();
	};
	return (
		<Dialog open fullWidth onClose={hideModal} className={classNames(classes.root, className)} {...other}>
			<DialogTitle>Update {go && go.go}</DialogTitle>
			<DialogContent>
				<FormContext {...formMethods}>
					<GoForm go={go} form={formName} onSubmit={onSubmit} />
				</FormContext>
			</DialogContent>
			<DialogActions>
				<Button onClick={hideModal}>Cancel</Button>
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
	go: GoPropType,
	hideModal: PropTypes.func.isRequired,
};

export default withStyles(styles)(EditGoDialog);
