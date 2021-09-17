import {List, Paper} from '@mui/material';
import NoGosState from 'components/NoGosState';
import PropTypes from 'prop-types';
import React from 'react';
import {goPropType} from 'util/types';

import {GoListItem} from './components';

const GoList = ({gos, ...props}) =>
	gos.length === 0 ? (
		<NoGosState />
	) : (
		<Paper {...props}>
			<List dense>
				{gos.map((go) => (
					<GoListItem key={go.id} go={go} />
				))}
			</List>
		</Paper>
	);

GoList.propTypes = {
	gos: PropTypes.arrayOf(goPropType),
};

GoList.defaultProps = {
	gos: [],
};

export default GoList;
