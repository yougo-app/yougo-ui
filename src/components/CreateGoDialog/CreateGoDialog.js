import FormDialog from 'components/FormDialog';
import GoForm from 'components/GoForm';
import useApiCreateGo from 'hooks/api/useApiCreateGo';
import useGoForm from 'hooks/useGoForm';
import {useSnackbar} from 'notistack';
import PropTypes from 'prop-types';
import React, {useCallback} from 'react';

const CreateGoDialog = ({className, onClose, ...other}) => {
	const {enqueueSnackbar} = useSnackbar();
	const {mutateAsync: createGo} = useApiCreateGo();
	const onSubmit = useCallback(
		(values, {setSubmitting}) => {
			createGo(values)
				.catch(() => enqueueSnackbar(`Problem creating '${values.alias}'`, {variant: 'error'}))
				.finally(() => {
					setSubmitting(false);
					onClose();
				});
		},
		[createGo, onClose, enqueueSnackbar]
	);

	const formik = useGoForm({onSubmit});

	return (
		<FormDialog
			className={className}
			title="Add a go"
			action="Add"
			onClose={onClose}
			onSubmit={formik.handleSubmit}
			{...other}
		>
			<GoForm formik={formik} />
		</FormDialog>
	);
};

CreateGoDialog.propTypes = {
	className: PropTypes.string,
	onClose: PropTypes.func.isRequired,
};

CreateGoDialog.defaultProps = {
	className: undefined,
};

export default CreateGoDialog;
