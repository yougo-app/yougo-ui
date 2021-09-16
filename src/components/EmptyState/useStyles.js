import {colors} from '@mui/material';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		flexDirection: 'column',
		color: colors.grey[500],
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));

export default useStyles;
