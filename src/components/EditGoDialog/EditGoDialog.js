import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import Gos from 'api/gos';
import classNames from 'classnames';
import GoForm from 'components/GoForm';
import {useSnackbar} from 'material-ui-snackbar-provider';
import diff from 'object-diff';
import PropTypes from 'prop-types';
import GoPropType from 'propTypes/GoPropType';
import React, {useCallback} from 'react';
import {FormContext, useForm} from 'react-hook-form';

const styles = {
	root: {},
};

export const formName = 'edit-go-form';

const EditGoDialog = ({classes, className, go, hideModal, ...other}) => {
	const snackbar = useSnackbar();
	const formMethods = useForm({mode: 'onBlur'});
	const [edit] = Gos.edit();
	const onSubmit = useCallback(
		(values) => {
			edit({id: go.id, patch: diff(go, values)})
				.then(() => snackbar.showMessage(`Updated ${values.go}`))
				.catch(() => snackbar.showMessage(`Can't update ${values.go}`))
				.finally(() => hideModal());
		},
		[edit, go, hideModal, snackbar]
	);
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
