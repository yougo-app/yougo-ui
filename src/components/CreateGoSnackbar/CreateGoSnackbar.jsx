import Snackbar from '@material-ui/core/Snackbar';
import React from 'react';

export default ({go, ...other}) =>
	go ? <Snackbar message={`Added '${go.go}'`} {...other} /> : null;
