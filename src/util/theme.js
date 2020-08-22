import {colors} from '@material-ui/core';
import {createMuiTheme} from '@material-ui/core/styles';

export default createMuiTheme({
	palette: {
		primary: {
			main: colors.blueGrey[700],
		},
		secondary: colors.lightBlue,
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
