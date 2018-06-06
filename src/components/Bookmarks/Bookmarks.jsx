import List from 'material-ui/List';
import Paper from 'material-ui/Paper';
import {withStyles} from 'material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Props from '../../utils/Props';
import Bookmark from './Bookmark';

const styles = theme => ({
	root: {
		flexGrow: 1,
		maxWidth: theme.content.maxWidth,
	},
});

class Bookmarks extends React.Component {
	propTypes = {
		aliases: PropTypes.arrayOf(Props.alias),
		actions: PropTypes.shape({
			load: PropTypes.func.isRequired,
		}).isRequired,
		classes: PropTypes.shape({
			root: PropTypes.string.isRequired,
		}).isRequired,
	};

	defaultProps = {
		aliases: [],
	};

	componentDidMount() {
		this.props.actions.load();
	}

	render() {
		const {classes, aliases} = this.props;

		return (
			<Paper className={classes.root}>
				<List>{aliases.map(alias => <Bookmark key={alias.id} alias={alias} />)}</List>
			</Paper>
		);
	}
}

export default withStyles(styles)(Bookmarks);
