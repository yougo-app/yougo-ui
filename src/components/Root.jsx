import CssBaseline from '@material-ui/core/CssBaseline';
import {MuiThemeProvider} from '@material-ui/core/styles';
import React from 'react';
import {Provider} from 'react-redux';
import store from '../utils/store';
import theme from '../utils/theme';
import Application from './Application';

export default () => (
	<Provider store={store}>
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<Application />
		</MuiThemeProvider>
	</Provider>
);