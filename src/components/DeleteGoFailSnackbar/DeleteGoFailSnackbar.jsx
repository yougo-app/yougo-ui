import React from 'react';
import ActionSnackBar from '../ActionSnackBar';

export default ({go, ...other}) =>
	go ? (
		<ActionSnackBar message={`Can't delete '${go.go}'`} actionMessage="Retry" {...other} />
	) : null;
