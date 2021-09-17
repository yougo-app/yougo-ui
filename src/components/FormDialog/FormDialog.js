import {Button, capitalize, Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const FormDialog = ({children, title, action, onClose, onSubmit, ...props}) => (
	<Dialog open fullWidth onClose={onClose} {...props}>
		{title && <DialogTitle>{title}</DialogTitle>}
		<DialogContent>{children}</DialogContent>
		<DialogActions>
			<Button onClick={onClose}>Cancel</Button>
			<Button color="secondary" onClick={onSubmit}>
				{capitalize(action)}
			</Button>
		</DialogActions>
	</Dialog>
);

FormDialog.propTypes = {
	children: PropTypes.node.isRequired,
	onClose: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
	title: PropTypes.string,
	action: PropTypes.string,
};

FormDialog.defaultProps = {
	action: 'Submit',
	title: undefined,
};

export default FormDialog;
