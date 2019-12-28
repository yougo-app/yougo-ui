import {CssBaseline} from '@material-ui/core';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {SnackbarProvider} from 'notistack';
import React from 'react';
import {ModalProvider} from 'react-modal-hook';
import {Provider} from 'react-redux';
import store from 'redux/store';
import theme from 'util/theme';
import Application from './Application';

export default () => (
	<Provider store={store}>
		<MuiThemeProvider theme={theme}>
			<SnackbarProvider maxSnack={1}>
				<ModalProvider>
					<CssBaseline />
					<Application />
				</ModalProvider>
			</SnackbarProvider>
		</MuiThemeProvider>
	</Provider>
);
