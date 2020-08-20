import {grey} from '@material-ui/core/colors';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
	root: {
		height: '100%',
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	message: {
		color: grey[700],
	},
});

export default useStyles;
