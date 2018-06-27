import {withStyles} from 'material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import AliasProp from '../../utils/AliasProp';
import Bookmark from '../Bookmark';
import Bookmarks from '../Bookmarks';

const styles = theme => ({
	root: {
		padding: 20,
		display: 'flex',
		justifyContent: 'center',
		textAlign: 'center',
		maxWidth: theme.content.maxWidth,
	},
});

class Body extends React.Component {
	static propTypes = {
		classes: PropTypes.shape({
			root: PropTypes.string.isRequired,
		}).isRequired,
		aliases: PropTypes.arrayOf(AliasProp),
		actions: PropTypes.shape({
			load: PropTypes.func.isRequired,
		}).isRequired,
	};

	static defaultProps = {
		aliases: [],
	};

	componentDidMount() {
		const {actions} = this.props;
		actions.load();
	}

	render() {
		const {classes, aliases} = this.props;

		return (
			<div className={classes.root}>
				<Bookmarks>{aliases.map(alias => <Bookmark key={alias.id} alias={alias} />)}</Bookmarks>
			</div>
		);
	}
}

export default withStyles(styles)(Body);
