import {List, Paper} from '@material-ui/core';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import useStyles from './useStyles';

const Gos = ({children, className, ...other}) => (
	<Paper className={classNames(useStyles().root, className)} {...other}>
		<List dense>{children}</List>
	</Paper>
);

Gos.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

Gos.defaultProps = {
	className: undefined,
	children: [],
};

export default Gos;
