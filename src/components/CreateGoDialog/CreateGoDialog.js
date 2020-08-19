import Gos from 'api/gos';
import GoForm from 'components/GoForm';
import {useSnackbar} from 'material-ui-snackbar-provider';
import PropTypes from 'prop-types';
import React, {useCallback} from 'react';

import FormDialog from '../FormDialog/FormDialog';

const CreateGoDialog = ({onClose, ...other}) => {
	const snackbar = useSnackbar();
	const [create] = Gos.create();
	const onSubmit = useCallback(
		(values, {setSubmitting}) => {
			create(values)
				.then(() => snackbar.showMessage(`Created ${values.go}`))
				.catch(() => snackbar.showMessage(`Can't create ${values.go}`))
				.finally(() => {
					setSubmitting(false);
					onClose();
				});
		},
		[create, onClose, snackbar]
	);

	return (
		<FormDialog title="Add a go" action="Add" onClose={onClose} {...other}>
			{(formRef) => <GoForm onSubmit={onSubmit} innerRef={formRef} />}
		</FormDialog>
	);
};

CreateGoDialog.propTypes = {
	onClose: PropTypes.func.isRequired,
};

export default CreateGoDialog;
