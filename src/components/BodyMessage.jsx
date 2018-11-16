import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import grey from '@material-ui/core/colors/grey';

const styles = {
	root: {
		height: '100%',
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	message: {
		color: grey[700],
	},
};

const BodyMessage = ({children, className, classes, disableTypography}) => (
	<div className={classNames(classes.root, className)}>
		{disableTypography ? (
			children
		) : (
			<Typography className={classes.message} variant="body2">
				{children}
			</Typography>
		)}
	</div>
);

BodyMessage.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	// eslint-disable-next-line react/forbid-prop-types
	classes: PropTypes.object.isRequired,
	disableTypography: PropTypes.bool,
};

BodyMessage.defaultProps = {
	className: '',
	disableTypography: false,
};

export default withStyles(styles)(BodyMessage);
