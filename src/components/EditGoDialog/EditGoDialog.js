import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import enqueueEditGo from 'actions/ui/snackbars/enqueueEditGo';
import Gos from 'api/gos';
import classNames from 'classnames';
import GoForm from 'components/GoForm';
import diff from 'object-diff';
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
	const [edit] = Gos.edit();
	const onSubmit = (values) => {
		edit({id: go.id, patch: diff(go, values)})
			.then(() => dispatch(enqueueEditGo(values)))
			.catch(() => dispatch(enqueueEditGo(values)))
			.finally(() => hideModal());
	};
	return (
		<Dialog
			open
			fullWidth
			onClose={hideModal}
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
