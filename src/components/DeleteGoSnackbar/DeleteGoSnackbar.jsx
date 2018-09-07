import React from 'react';
import ActionSnackBar from '../ActionSnackBar';

export default ({go, ...other}) =>
	go ? <ActionSnackBar message={`'${go.go}' deleted`} actionMessage="Undo" {...other} /> : null;
