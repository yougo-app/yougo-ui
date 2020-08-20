import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(3),
	},
	gos: {
		marginLeft: 'auto',
		marginRight: 'auto',
		maxWidth: theme.content.maxWidth,
	},
}));

export default useStyles;
