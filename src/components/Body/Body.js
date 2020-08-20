import AddIcon from '@material-ui/icons/Add';
import GosAPI from 'api/gos';
import classNames from 'classnames';
import BodyMessage from 'components/BodyMessage';
import Go from 'components/Go';
import Gos from 'components/Gos';
import {useSearchContext} from 'context/SearchContext';
import PropTypes from 'prop-types';
import React from 'react';

import useStyles from './useStyles';

const Body = ({className, ...other}) => {
	const classes = useStyles();
	const filter = useSearchContext();
	const {isLoading, data: gos} = GosAPI.findFiltered(filter);

	if (isLoading) {
		return <span>Loading...</span>;
	}

	return (
		<div className={classNames(classes.root, className)} {...other}>
			{gos.length ? (
				<Gos className={classes.gos}>
					{gos.map((go) => (
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
	className: PropTypes.string,
};

Body.defaultProps = {
	className: undefined,
};

export default Body;
