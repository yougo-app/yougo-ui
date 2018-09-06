import Snackbar from '@material-ui/core/Snackbar';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import React from 'react';

const styles = {
	root: {},
};

const SnackBar = ({classes, className, ...other}) => (
	<Snackbar
		className={classNames(classes.root, className)}
		autoHideDuration={4000}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'left',
		}}
		{...other}
	/>
);

export default withStyles(styles)(SnackBar);
