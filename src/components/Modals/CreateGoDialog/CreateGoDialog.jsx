import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import GoForm, {name} from '../../GoForm';

const styles = {
	root: {},
};

const CreateGoDialog = ({classes, className, onClose, onSubmit, ...other}) => (
	<Dialog fullWidth className={classNames(classes.root, className)} onClose={onClose} {...other}>
		<DialogTitle id="create-go-dialog">Add a go</DialogTitle>
		<DialogContent>
			<GoForm onSubmit={onSubmit} />
		</DialogContent>
		<DialogActions>
			<Button color="secondary" onClick={onClose}>
				Cancel
			</Button>
			<Button color="primary" type="submit" form={name}>
				Submit
			</Button>
		</DialogActions>
	</Dialog>
);

CreateGoDialog.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	classes: PropTypes.object.isRequired,
	// eslint-disable-next-line react/require-default-props
	className: PropTypes.string,
	onClose: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(CreateGoDialog);
