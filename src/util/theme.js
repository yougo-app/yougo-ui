import {blueGrey, lightBlue} from '@material-ui/core/colors';
import {createMuiTheme} from '@material-ui/core/styles';

export default createMuiTheme({
	palette: {
		primary: {
			main: blueGrey[700],
		},
		secondary: lightBlue,
	},
	props: {
		MuiSnackbar: {
			autoHideDuration: 4000,
			anchorOrigin: {
				vertical: 'bottom',
				horizontal: 'left',
			},
		},
	},
});
