import React from 'react';
import CreateGoDialog from './CreateGoDialog';
import CreateGoFailSnackBar from './CreateGoFailSnackbar';
import CreateGoSnackBar from './CreateGoSnackbar';
import DeleteGoFailSnackBar from './DeleteGoFailSnackbar';
import DeleteGoSnackBar from './DeleteGoSnackbar';
import GoMenu from './GoMenu';

export default () => (
	<React.Fragment>
		<CreateGoDialog />
		<GoMenu />
		<DeleteGoSnackBar />
		<DeleteGoFailSnackBar />
		<CreateGoSnackBar />
		<CreateGoFailSnackBar />
	</React.Fragment>
);
