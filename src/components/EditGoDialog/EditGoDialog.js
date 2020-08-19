import Gos from 'api/gos';
import FormDialog from 'components/FormDialog';
import GoForm from 'components/GoForm';
import {useSnackbar} from 'material-ui-snackbar-provider';
import diff from 'object-diff';
import PropTypes from 'prop-types';
import React, {useCallback} from 'react';
import {goPropType} from 'util/types';

const EditGoDialog = ({go, onClose, ...other}) => {
	const snackbar = useSnackbar();
	const [edit] = Gos.edit();
	const onSubmit = useCallback(
		(values, {setSubmitting}) => {
			edit({id: go.id, patch: diff(go, values)})
				.then(() => snackbar.showMessage(`Updated ${values.go}`))
				.catch(() => snackbar.showMessage(`Can't update ${values.go}`))
				.finally(() => {
					setSubmitting(false);
					onClose();
				});
		},
		[edit, go, onClose, snackbar]
	);

	return (
		<FormDialog title={`Update ${go.go}`} action="Update" onClose={onClose} {...other}>
			{(formRef) => <GoForm onSubmit={onSubmit} innerRef={formRef} initialValues={go} />}
		</FormDialog>
	);
};

EditGoDialog.propTypes = {
	go: goPropType,
	onClose: PropTypes.func.isRequired,
};

export default EditGoDialog;
