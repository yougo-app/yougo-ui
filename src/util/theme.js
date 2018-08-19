import blueGrey from '@material-ui/core/colors/blueGrey';
import lightBlue from '@material-ui/core/colors/lightBlue';
import {createMuiTheme} from '@material-ui/core/styles';

export default createMuiTheme({
	palette: {
		primary: {
			main: blueGrey[700],
		},
		secondary: lightBlue,
	},
	content: {
		maxWidth: 800,
	},
});
