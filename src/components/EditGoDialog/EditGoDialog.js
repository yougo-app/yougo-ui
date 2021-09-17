import FormDialog from 'components/FormDialog';
import GoForm from 'components/GoForm';
import {useEditGo} from 'hooks';
import useGoForm from 'hooks/useGoForm';
import diff from 'object-diff';
import PropTypes from 'prop-types';
import React, {useCallback} from 'react';
import {goPropType} from 'util/types';

const EditGoDialog = ({className, go, onClose, ...other}) => {
	// const snackbar = useSnackbar();
	const {mutateAsync: editGo} = useEditGo();
	const onSubmit = useCallback(
		(values, {setSubmitting}) => {
			editGo({current: go, updated: diff(go, values)})
				.then(() => console.log('success')) // snackbar.showMessage(`Edited ${values.alias}`))
				.catch(() => console.log('fail')) // snackbar.showMessage(`Can't edit ${values.alias}`))
				.finally(() => {
					setSubmitting(false);
					onClose();
				});
		},
		[go, onClose, editGo]
	);

	const formik = useGoForm({onSubmit, initialValues: go});

	return (
		<FormDialog
			className={className}
			title={`Edit ${go.alias}`}
			action="Edit"
			onClose={onClose}
			onSubmit={formik.handleSubmit}
			{...other}
		>
			<GoForm formik={formik} />
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
