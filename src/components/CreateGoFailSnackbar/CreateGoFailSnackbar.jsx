import React from 'react';
import ActionSnackBar from '../ActionSnackBar';

export default ({go, ...other}) =>
	go ? (
		<ActionSnackBar message={`Can't create '${go.go}'`} actionMessage="Retry" {...other} />
	) : null;
