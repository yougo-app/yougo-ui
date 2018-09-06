import React from 'react';
import CreateGoDialog from './CreateGoDialog/index';
import DeleteGoDialog from './DeleteGoDialog/index';
import GoMenu from './GoMenu';

export default () => (
	<React.Fragment>
		<CreateGoDialog />
		<DeleteGoDialog />
		<GoMenu />
	</React.Fragment>
);
