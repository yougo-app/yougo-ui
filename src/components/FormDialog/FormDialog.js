import {Button, capitalize, Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const FormDialog = ({children, className, title, action, onClose, onSubmit, ...other}) => (
	<Dialog open fullWidth onClose={onClose} className={className} {...other}>
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
	className: PropTypes.string,
};

FormDialog.defaultProps = {
	action: 'Submit',
	className: undefined,
	title: undefined,
};

export default FormDialog;
