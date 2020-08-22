import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	avatar: {
		width: theme.spacing(4),
		height: theme.spacing(4),
	},
	menu: {
		anchorOrigin: {
			vertical: 'bottom',
			horizontal: 'center',
		},
	},
}));

export default useStyles;
