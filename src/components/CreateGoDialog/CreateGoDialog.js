import FormDialog from 'components/FormDialog';
import GoForm from 'components/GoForm';
import useApiCreateGo from 'hooks/api/useApiCreateGo';
import useGoForm from 'hooks/useGoForm';
import {useSnackbar} from 'notistack';
import PropTypes from 'prop-types';
import {useCallback} from 'react';

const CreateGoDialog = ({onClose, ...props}) => {
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
			title="Add a go"
			action="Add"
			onClose={onClose}
			onSubmit={formik.handleSubmit}
			{...props}
		>
			<GoForm formik={formik} />
		</FormDialog>
	);
};

CreateGoDialog.propTypes = {
	onClose: PropTypes.func.isRequired,
};

export default CreateGoDialog;
