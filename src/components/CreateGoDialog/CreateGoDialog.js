import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core';
import Gos from 'api/gos';
import GoForm from 'components/GoForm';
import {useSnackbar} from 'material-ui-snackbar-provider';
import PropTypes from 'prop-types';
import React, {useCallback, useRef} from 'react';

export const formName = 'create-go-form';

const CreateGoDialog = ({className, hideModal, ...other}) => {
	const formRef = useRef();
	const snackbar = useSnackbar();
	const [create] = Gos.create();
	const onSubmit = useCallback(
		(values, {setSubmitting}) => {
			create(values)
				.then(() => snackbar.showMessage(`Created ${values.go}`))
				.catch(() => snackbar.showMessage(`Can't create ${values.go}`))
				.finally(() => {
					setSubmitting(false);
					hideModal();
				});
		},
		[create, hideModal, snackbar]
	);

	const handleSubmit = useCallback(() => {
		if (formRef.current) {
			formRef.current.submitForm();
		}
	}, []);

	return (
		<Dialog open fullWidth onClose={hideModal} className={className} {...other}>
			<DialogTitle>Add a go</DialogTitle>
			<DialogContent>
				<GoForm onSubmit={onSubmit} innerRef={formRef} />
			</DialogContent>
			<DialogActions>
				<Button onClick={hideModal}>Cancel</Button>
				<Button color="secondary" onClick={handleSubmit}>
					Add
				</Button>
			</DialogActions>
		</Dialog>
	);
};

CreateGoDialog.propTypes = {
	className: PropTypes.string,
	hideModal: PropTypes.func.isRequired,
};

export default CreateGoDialog;
