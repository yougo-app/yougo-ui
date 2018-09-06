import React from 'react';
import ActionSnackBar from '../common/ActionSnackBar';

export default ({go, ...other}) =>
	go ? (
		<ActionSnackBar message={`Can't delete '${go.go}'`} actionMessage="Retry" {...other} />
	) : null;
