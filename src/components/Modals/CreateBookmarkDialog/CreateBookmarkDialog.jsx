import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import BookmarkForm, {name} from '../../BookmarkForm';

const styles = {
	root: {},
};

const CreateBookmarkDialog = ({classes, className, onClose, onSubmit, ...other}) => (
	<Dialog fullWidth className={classNames(classes.root, className)} onClose={onClose} {...other}>
		<DialogTitle id="create-bookmark-dialog">Add bookmark</DialogTitle>
		<DialogContent>
			<BookmarkForm onSubmit={onSubmit} />
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

CreateBookmarkDialog.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	classes: PropTypes.object.isRequired,
	// eslint-disable-next-line react/require-default-props
	className: PropTypes.string,
	onClose: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(CreateBookmarkDialog);
