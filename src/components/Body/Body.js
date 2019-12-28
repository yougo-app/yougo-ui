import {withStyles} from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import classNames from 'classnames';
import BodyMessage from 'components/BodyMessage';
import Go from 'components/Go';
import Gos from 'components/Gos';
import PropTypes from 'prop-types';
import React from 'react';
import {useSelector} from 'react-redux';
import getFilteredGos from 'selectors/getFilteredGos';

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
const Body = ({classes, className, dispatch, ...other}) => {
	const gos = useSelector(getFilteredGos);
	return (
		<div className={classNames(classes.root, className)} {...other}>
			{gos.length ? (
				<Gos className={classes.gos}>
					{gos.map(go => (
						<Go key={go.id} go={go} />
					))}
				</Gos>
			) : (
				<BodyMessage>
					To add a go, click the <AddIcon color="inherit" /> on the right-hand side of the header
					bar
				</BodyMessage>
			)}
		</div>
	);
};

Body.propTypes = {
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
	dispatch: PropTypes.func,
};

export default withStyles(styles)(Body);
