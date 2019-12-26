import {Button, Snackbar as MuiSnackbar} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const Snackbar = ({actionFunc, actionText, ...other}) =>
	actionFunc ? (
		<MuiSnackbar
			action={[
				<Button key="undo" color="secondary" size="small" onClick={actionFunc}>
					{actionText}
				</Button>,
			]}
			{...other}
		/>
	) : (
		<MuiSnackbar {...other} />
	);

Snackbar.propTypes = {
	actionFunc: PropTypes.func,
	actionText: PropTypes.string,
};

Snackbar.defaultProps = {
	actionText: '',
};

export default Snackbar;
