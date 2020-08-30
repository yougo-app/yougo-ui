import FormDialog from 'components/FormDialog';
import GoForm from 'components/GoForm';
import {useUpdateGo} from 'hooks';
import {useSnackbar} from 'material-ui-snackbar-provider';
import diff from 'object-diff';
import PropTypes from 'prop-types';
import React, {useCallback} from 'react';
import {goPropType} from 'util/types';

const UpdateGoDialog = ({className, go, onClose, ...other}) => {
	const snackbar = useSnackbar();
	const [updateGo] = useUpdateGo();
	const onSubmit = useCallback(
		(values, {setSubmitting}) => {
			updateGo({alias: go.alias, patch: diff(go, values)})
				.then(() => snackbar.showMessage(`Updated ${values.alias}`))
				.catch(() => snackbar.showMessage(`Can't update ${values.alias}`))
				.finally(() => {
					setSubmitting(false);
					onClose();
				});
		},
		[go, onClose, snackbar, updateGo]
	);

	return (
		<FormDialog title={`Update ${go.alias}`} action="Update" onClose={onClose} {...other}>
			{(formRef) => <GoForm onSubmit={onSubmit} innerRef={formRef} initialValues={go} />}
		</FormDialog>
	);
};

UpdateGoDialog.propTypes = {
	className: PropTypes.string,
	go: goPropType.isRequired,
	onClose: PropTypes.func.isRequired,
};

UpdateGoDialog.defaultProps = {
	className: undefined,
};

export default UpdateGoDialog;
