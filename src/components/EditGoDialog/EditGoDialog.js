import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core';
import Gos from 'api/gos';
import GoForm from 'components/GoForm';
import {useSnackbar} from 'material-ui-snackbar-provider';
import diff from 'object-diff';
import PropTypes from 'prop-types';
import React, {useCallback, useRef} from 'react';
import {goPropType} from 'util/types';

export const formName = 'edit-go-form';

const EditGoDialog = ({className, go, hideModal, ...other}) => {
	const formRef = useRef();
	const snackbar = useSnackbar();
	const [edit] = Gos.edit();
	const onSubmit = useCallback(
		(values, {setSubmitting}) => {
			edit({id: go.id, patch: diff(go, values)})
				.then(() => snackbar.showMessage(`Updated ${values.go}`))
				.catch(() => snackbar.showMessage(`Can't update ${values.go}`))
				.finally(() => {
					setSubmitting(false);
					hideModal();
				});
		},
		[edit, go, hideModal, snackbar]
	);

	const handleSubmit = useCallback(() => {
		if (formRef.current) {
			formRef.current.submitForm();
		}
	}, []);

	return (
		<Dialog open fullWidth onClose={hideModal} className={className} {...other}>
			<DialogTitle>Update {go && go.go}</DialogTitle>
			<DialogContent>
				<GoForm go={go} innerRef={formRef} onSubmit={onSubmit} />
			</DialogContent>
			<DialogActions>
				<Button onClick={hideModal}>Cancel</Button>
				<Button color="secondary" onClick={handleSubmit}>
					Update
				</Button>
			</DialogActions>
		</Dialog>
	);
};

EditGoDialog.propTypes = {
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
	go: goPropType,
	hideModal: PropTypes.func.isRequired,
};

export default EditGoDialog;
