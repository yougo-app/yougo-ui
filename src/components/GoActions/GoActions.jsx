import IconButton from '@material-ui/core/IconButton';
import withStyles from '@material-ui/core/styles/withStyles';
import DeleteIcon from '@material-ui/icons/Delete';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import GoPropType from '../../propTypes/GoPropType';

const styles = () => ({
	root: {},
	deleteButton: {},
});

const GoActions = ({classes, className, go, onDelete, ...other}) => (
	<span className={classNames(classes.root, className)}>
		<IconButton className={classes.deleteButton} onClick={onDelete} {...other}>
			<DeleteIcon />
		</IconButton>
	</span>
);

GoActions.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	classes: PropTypes.object.isRequired,
	// eslint-disable-next-line react/require-default-props
	className: PropTypes.string,
	go: GoPropType.isRequired,
	onDelete: PropTypes.func.isRequired,
};

GoActions.defaultProps = {};

export default withStyles(styles)(GoActions);
