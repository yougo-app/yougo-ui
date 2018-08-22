import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {fade} from '@material-ui/core/styles/colorManipulator';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import GoPropType from '../../propTypes/GoPropType';

const styles = theme => ({
	root: {},
	deleteButton: {
		color: theme.palette.error.main,
		'&:hover': {
			backgroundColor: fade(theme.palette.error.main, theme.palette.action.hoverOpacity),
		},
	},
});

const DeleteGoDialog = ({classes, className, go, onClose, onConfirm, ...other}) => (
	<Dialog
		open
		fullWidth
		onClose={onClose}
		className={classNames(classes.root, className)}
		{...other}
	>
		<DialogTitle>Delete {go.go}</DialogTitle>
		<DialogContent>
			<DialogContentText>Are you sure you want to delete {go.go}?</DialogContentText>
		</DialogContent>
		<DialogActions>
			<Button onClick={onClose}>Cancel</Button>
			<Button color="secondary" onClick={onConfirm} className={classes.deleteButton}>
				Delete
			</Button>
		</DialogActions>
	</Dialog>
);

DeleteGoDialog.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	classes: PropTypes.object.isRequired,
	// eslint-disable-next-line react/require-default-props
	className: PropTypes.string,
	go: GoPropType.isRequired,
	onClose: PropTypes.func.isRequired,
	onConfirm: PropTypes.func.isRequired,
};

export default withStyles(styles)(DeleteGoDialog);
