import Snackbars from 'components/Snackbars';
import React from 'react';
import CreateGoDialog from './CreateGoDialog';
import EditGoDialog from './EditGoDialog';

export default () => (
	<>
		<CreateGoDialog />
		<EditGoDialog />
		<Snackbars />
	</>
);
