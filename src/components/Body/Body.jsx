import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import AliasProp from '../../utils/AliasProp';
import Bookmark from '../Bookmark';
import Bookmarks from '../Bookmarks';

const styles = theme => ({
	root: {
		padding: theme.spacing.unit * 2,
		marginLeft: 'auto',
		marginRight: 'auto',
		width: '100%',
		maxWidth: theme.content.maxWidth,
	},
});

const Body = ({aliases, classes, className, dispatch, ...other}) => (
	<div className={classNames(classes.root, className)} {...other}>
		<Bookmarks>
			{aliases.map(alias => (
				<Bookmark key={alias.id} alias={alias} />
			))}
		</Bookmarks>
	</div>
);

Body.propTypes = {
	aliases: PropTypes.arrayOf(AliasProp),

	// eslint-disable-next-line react/forbid-prop-types
	classes: PropTypes.object.isRequired,

	// eslint-disable-next-line react/no-unused-prop-types,react/require-default-props
	className: PropTypes.string,

	// eslint-disable-next-line react/require-default-props
	dispatch: PropTypes.func,
};

Body.defaultProps = {
	aliases: [],
};

export default withStyles(styles)(Body);
