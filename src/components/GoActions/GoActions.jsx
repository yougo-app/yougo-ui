import IconButton from '@material-ui/core/IconButton';
import withStyles from '@material-ui/core/styles/withStyles';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import React from 'react';

const styles = () => ({
	root: {},
	deleteAction: {},
});

const GoActions = ({classes, className, goId, onDelete, ...other}) => (
	<span className={classNames(classes.root, className)}>
		<IconButton className={classes.deleteAction} onClick={onDelete} {...other}>
			<DeleteIcon />
		</IconButton>
	</span>
);

GoActions.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	classes: PropTypes.object.isRequired,
	// eslint-disable-next-line react/require-default-props
	className: PropTypes.string,
	goId: PropTypes.string.isRequired,
	onDelete: PropTypes.func.isRequired,
};

GoActions.defaultProps = {};

export default withStyles(styles)(GoActions);
