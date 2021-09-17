import {Stack} from '@mui/material';
import {grey} from '@mui/material/colors';
import PropTypes from 'prop-types';
import React from 'react';

const EmptyState = ({children, ...props}) => (
	<Stack alignItems="center" spacing={1} color={grey[500]} {...props}>
		{children}
	</Stack>
);

EmptyState.propTypes = {
	children: PropTypes.node.isRequired,
};

export default EmptyState;
