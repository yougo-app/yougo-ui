import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import GoPropType from '../../propTypes/GoPropType';
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

const Body = ({gos, classes, className, dispatch, ...other}) => (
	<div className={classNames(classes.root, className)} {...other}>
		<Gos>
			{gos.map(go => (
				<Go key={go.id} go={go} />
			))}
		</Gos>
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
