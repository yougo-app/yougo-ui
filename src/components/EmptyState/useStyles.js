import {colors} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

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
