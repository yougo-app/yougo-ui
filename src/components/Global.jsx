import React from 'react';
import CreateGoDialog from './CreateGoDialog';
import EditGoDialog from './EditGoDialog';
import GoMenu from './GoMenu';
import Snackbar from './Snackbar';

export default () => (
	<React.Fragment>
		<CreateGoDialog />
		<EditGoDialog />
		<GoMenu />
		<Snackbar />
	</React.Fragment>
);
