import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import GoForm from '../GoForm';

const styles = {
	root: {},
};

export const formName = 'edit-go-form';

const EditGoDialog = ({classes, className, go, onClose, onSubmit, ...other}) => (
	<Dialog
		open
		fullWidth
		onClose={onClose}
		className={classNames(classes.root, className)}
		{...other}
	>
		<DialogTitle>Update {go.go}</DialogTitle>
		<DialogContent>
			<GoForm go={go} form={formName} onSubmit={onSubmit} />
		</DialogContent>
		<DialogActions>
			<Button onClick={onClose}>Cancel</Button>
			<Button color="secondary" type="submit" form={formName}>
				Update
			</Button>
		</DialogActions>
	</Dialog>
);

EditGoDialog.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	classes: PropTypes.object.isRequired,
	// eslint-disable-next-line react/require-default-props
	className: PropTypes.string,
	// eslint-disable-next-line react/forbid-prop-types
	go: PropTypes.object,
	onClose: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
};

EditGoDialog.defaultProps = {
	go: {},
};

export default withStyles(styles)(EditGoDialog);
