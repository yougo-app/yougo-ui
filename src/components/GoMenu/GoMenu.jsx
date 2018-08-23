import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import withStyles from '@material-ui/core/styles/withStyles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import GoPropType from '../../propTypes/GoPropType';

const styles = () => ({
	root: {},
});

const GoMenu = ({classes, className, go, onDelete, ...other}) => (
	<Menu open className={classNames(classes.root, className)} {...other}>
		<MenuItem onClick={() => console.log(`editing ${go.id}`)}>
			<ListItemIcon>
				<EditIcon />
			</ListItemIcon>
			<ListItemText>Edit</ListItemText>
		</MenuItem>
		<MenuItem onClick={() => console.log(`copying ${go.id}`)}>
			<ListItemIcon>
				<FileCopyIcon />
			</ListItemIcon>
			<ListItemText>Copy URL</ListItemText>
		</MenuItem>
		<MenuItem onClick={onDelete}>
			<ListItemIcon>
				<DeleteIcon />
			</ListItemIcon>
			<ListItemText>Delete</ListItemText>
		</MenuItem>
	</Menu>
);

GoMenu.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	classes: PropTypes.object.isRequired,
	// eslint-disable-next-line react/require-default-props
	className: PropTypes.string,
	go: GoPropType.isRequired,
	onDelete: PropTypes.func.isRequired,
};

GoMenu.defaultProps = {};

export default withStyles(styles)(GoMenu);
