import React from 'react';
import SnackBar from '../common/SnackBar';

export default ({go, ...other}) =>
	go ? <SnackBar message={`Added '${go.go}'`} {...other} /> : null;
