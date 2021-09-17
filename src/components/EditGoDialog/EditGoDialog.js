import FormDialog from 'components/FormDialog';
import GoForm from 'components/GoForm';
import useApiPatchGo from 'hooks/api/useApiPatchGo';
import useGoForm from 'hooks/useGoForm';
import {useSnackbar} from 'notistack';
import diff from 'object-diff';
import PropTypes from 'prop-types';
import React, {useCallback} from 'react';
import {goPropType} from 'util/types';

const EditGoDialog = ({className, go, onClose, ...other}) => {
	const {enqueueSnackbar} = useSnackbar();
	const {mutateAsync: editGo} = useApiPatchGo();
	const onSubmit = useCallback(
		(values, {setSubmitting}) => {
			editGo({current: go, updated: diff(go, values)})
				.catch(() => enqueueSnackbar(`Problem editing '${values.alias}'`, {variant: 'error'}))
				.finally(() => {
					setSubmitting(false);
					onClose();
				});
		},
		[editGo, go, enqueueSnackbar, onClose]
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
