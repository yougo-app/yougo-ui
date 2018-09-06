import React from 'react';
import ActionSnackBar from '../common/ActionSnackBar';

export default ({go, ...other}) =>
	go ? <ActionSnackBar message={`'${go.go}' deleted`} actionMessage="Undo" {...other} /> : null;
