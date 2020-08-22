import FormDialog from 'components/FormDialog';
import GoForm from 'components/GoForm';
import useCreateGo from 'hooks/useCreateGo';
import {useSnackbar} from 'material-ui-snackbar-provider';
import PropTypes from 'prop-types';
import React, {useCallback} from 'react';

const CreateGoDialog = ({className, onClose, ...other}) => {
	const snackbar = useSnackbar();
	const [createGo] = useCreateGo();
	const onSubmit = useCallback(
		(values, {setSubmitting}) => {
			createGo(values)
				.then(() => snackbar.showMessage(`Created ${values.go}`))
				.catch(() => snackbar.showMessage(`Can't create ${values.go}`))
				.finally(() => {
					setSubmitting(false);
					onClose();
				});
		},
		[createGo, onClose, snackbar]
	);

	return (
		<FormDialog className={className} title="Add a go" action="Add" onClose={onClose} {...other}>
			{(formRef) => <GoForm onSubmit={onSubmit} innerRef={formRef} />}
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
