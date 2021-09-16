import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.primary.dark,
	},
	left: {
		flex: '1',
	},
	right: {
		flex: '1',
		textAlign: 'end',
	},
	avatar: {
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.secondary.contrastText,
	},
	searchbar: {
		width: '100%',
	},
}));

export default useStyles;
