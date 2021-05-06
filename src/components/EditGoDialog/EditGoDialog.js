import FormDialog from 'components/FormDialog';
import GoForm from 'components/GoForm';
import {useEditGo} from 'hooks';
import {useSnackbar} from 'material-ui-snackbar-provider';
import diff from 'object-diff';
import PropTypes from 'prop-types';
import React, {useCallback} from 'react';
import {goPropType} from 'util/types';

const EditGoDialog = ({className, go, onClose, ...other}) => {
	const snackbar = useSnackbar();
	const {mutateAsync: editGo} = useEditGo();
	const onSubmit = useCallback(
		(values, {setSubmitting}) => {
			editGo({current: go, updated: diff(go, values)})
				.then(() => snackbar.showMessage(`Edited ${values.alias}`))
				.catch(() => snackbar.showMessage(`Can't edit ${values.alias}`))
				.finally(() => {
					setSubmitting(false);
					onClose();
				});
		},
		[go, onClose, snackbar, editGo]
	);

	return (
		<FormDialog title={`Edit ${go.alias}`} action="Edit" onClose={onClose} {...other}>
			{(formRef) => <GoForm onSubmit={onSubmit} innerRef={formRef} initialValues={go} />}
		</FormDialog>
	);
};

EditGoDialog.propTypes = {
	className: PropTypes.string,
	go: goPropType.isRequired,
	onClose: PropTypes.func.isRequired,
};

EditGoDialog.defaultProps = {
	className: undefined,
};

export default EditGoDialog;
