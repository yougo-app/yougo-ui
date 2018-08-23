import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography/Typography';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import GoPropType from '../propTypes/GoPropType';
import GoActions from './GoActions';

const styles = theme => ({
	root: {},
	go: {
		fontSize: theme.typography.pxToRem(16),
	},
	href: {
		fontSize: 'inherit',
	},
});

// todo: https://material.io/guidelines/components/lists.html#lists-usage
const Go = ({classes, className, go, ...other}) => (
	<ListItem button className={classNames(classes.root, className)} {...other}>
		<ListItemText
			disableTypography
			primary={
				<Typography variant="subheading" component="span" className={classes.go}>
					{go.go}
				</Typography>
			}
			secondary={
				<Typography variant="body1" component="span" color="textSecondary" className={classes.href}>
					{go.href}
				</Typography>
			}
		/>
		<ListItemSecondaryAction>
			<GoActions go={go} />
		</ListItemSecondaryAction>
	</ListItem>
);

Go.propTypes = {
	go: GoPropType.isRequired,

	// eslint-disable-next-line react/forbid-prop-types
	classes: PropTypes.object.isRequired,

	// eslint-disable-next-line react/require-default-props
	className: PropTypes.string,
};

export default withStyles(styles)(Go);
