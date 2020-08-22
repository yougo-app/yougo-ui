import {List, Paper} from '@material-ui/core';
import NoGosState from 'components/NoGosState';
import PropTypes from 'prop-types';
import React from 'react';
import {goPropType} from 'util/types';

import {GoListItem} from './components';

const GoList = ({className, gos, ...other}) =>
	gos.length === 0 ? (
		<NoGosState />
	) : (
		<Paper className={className} {...other}>
			<List dense>
				{gos.map((go) => (
					<GoListItem key={go.id} go={go} />
				))}
			</List>
		</Paper>
	);

GoList.propTypes = {
	className: PropTypes.string,
	gos: PropTypes.arrayOf(goPropType),
};

GoList.defaultProps = {
	className: undefined,
	gos: [],
};

export default GoList;
