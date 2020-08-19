import {
	Button,
	capitalize,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {useCallback, useRef} from 'react';

const FormDialog = ({children, className, title, action, onClose, ...other}) => {
	const formRef = useRef();
	const handleSubmit = useCallback(() => {
		if (formRef.current) {
			formRef.current.submitForm();
		}
	}, [formRef]);

	return (
		<Dialog open fullWidth onClose={onClose} className={className} {...other}>
			{title && <DialogTitle>{title}</DialogTitle>}
			<DialogContent>{children(formRef)}</DialogContent>
			<DialogActions>
				<Button onClick={onClose}>Cancel</Button>
				<Button color="secondary" onClick={handleSubmit}>
					{capitalize(action)}
				</Button>
			</DialogActions>
		</Dialog>
	);
};

FormDialog.propTypes = {
	children: PropTypes.func.isRequired,
	onClose: PropTypes.func.isRequired,
	title: PropTypes.string,
	action: PropTypes.string,
	className: PropTypes.string,
};

FormDialog.defaultProps = {
	className: '',
	action: 'Submit',
	title: undefined,
};

export default FormDialog;
