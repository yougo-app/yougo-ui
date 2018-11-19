import React from 'react';
import CreateGoDialog from './CreateGoDialog';
import GoMenu from './GoMenu';
import Snackbar from './Snackbar';

export default () => (
	<React.Fragment>
		<CreateGoDialog />
		<GoMenu />
		<Snackbar />
	</React.Fragment>
);
