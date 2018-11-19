import Button from '@material-ui/core/Button';
import MuiSnackbar from '@material-ui/core/Snackbar';
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
	// eslint-disable-next-line react/require-default-props
	actionFunc: PropTypes.func,
	actionText: PropTypes.string,
};

Snackbar.defaultProps = {
	actionText: '',
};

export default Snackbar;
