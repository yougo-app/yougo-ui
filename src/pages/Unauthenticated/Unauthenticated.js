import {Typography} from '@mui/material';
import EmptyState from 'components/EmptyState';

const Unauthenticated = ({...props}) => (
	<EmptyState {...props}>
		<Typography variant="h1" color="text.primary">
			Yougo
		</Typography>
		<Typography color="text.secondary">Please sign in to use this site</Typography>
	</EmptyState>
);

export default Unauthenticated;
