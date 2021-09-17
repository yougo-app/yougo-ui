import FormDialog from 'components/FormDialog';
import GoForm from 'components/GoForm';
import useCreateGo from 'hooks/useCreateGo';
import useGoForm from 'hooks/useGoForm';
// import {useSnackbar} from 'material-ui-snackbar-provider';
import PropTypes from 'prop-types';
import React, {useCallback} from 'react';

const CreateGoDialog = ({className, onClose, ...other}) => {
	// const snackbar = useSnackbar();
	const {mutateAsync: createGo} = useCreateGo();
	const onSubmit = useCallback(
		(values, {setSubmitting}) => {
			createGo(values)
				.then(() => console.log('suzzess')) // snackbar.showMessage(`Created ${values.alias}`))
				.catch(() => console.log('fail')) // snackbar.showMessage(`Can't create ${values.alias}`))
				.finally(() => {
					setSubmitting(false);
					onClose();
				});
		},
		[createGo, onClose]
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
