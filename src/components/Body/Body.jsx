import {withStyles} from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import GoPropType from '../../propTypes/GoPropType';
import BodyMessage from '../BodyMessage';
import Go from '../Go';
import Gos from '../Gos';

const styles = theme => ({
	root: {
		padding: theme.spacing(3),
	},
	gos: {
		marginLeft: 'auto',
		marginRight: 'auto',
		maxWidth: theme.content.maxWidth,
	},
});

const Body = ({gos, classes, className, dispatch, ...other}) => (
	<div className={classNames(classes.root, className)} {...other}>
		{gos.length ? (
			<Gos className={classes.gos}>
				{gos.map(go => (
					<Go key={go.id} go={go} />
				))}
			</Gos>
		) : (
			<BodyMessage>
				To add a go, click the <AddIcon color="inherit" /> on the right-hand side of the header bar
			</BodyMessage>
		)}
	</div>
);

Body.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	classes: PropTypes.object.isRequired,

	// eslint-disable-next-line react/no-unused-prop-types,react/require-default-props
	className: PropTypes.string,

	// eslint-disable-next-line react/require-default-props
	dispatch: PropTypes.func,

	gos: PropTypes.arrayOf(GoPropType),
};

Body.defaultProps = {
	gos: [],
};

export default withStyles(styles)(Body);
