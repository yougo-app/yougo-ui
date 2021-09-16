import {blueGrey, lightBlue} from '@mui/material/colors';
import {createTheme} from '@mui/material/styles';

export default createTheme({
	palette: {
		primary: {
			main: blueGrey[700],
		},
		secondary: lightBlue,
	},
	components: {
		MuiSnackbar: {
			defaultProps: {
				autoHideDuration: 4000,
				anchorOrigin: {
					vertical: 'bottom',
					horizontal: 'left',
				},
			},
		},
	},
});
