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
		padding: theme.spacing.unit * 2,
		marginLeft: 'auto',
		marginRight: 'auto',
		width: '100%',
		maxWidth: theme.content.maxWidth,
	},
});

const GosList = ({gos}) => (
	<Gos>
		{gos.map(go => (
			<Go key={go.id} go={go} />
		))}
	</Gos>
);

const Body = ({gos, classes, className, dispatch, ...other}) => (
	<div className={classNames(classes.root, className)} {...other}>
		{gos.length ? (
			<GosList gos={gos} />
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
