import {CssBaseline} from '@material-ui/core';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {queryConfig} from 'api/base';
import {SnackbarProvider} from 'notistack';
import React from 'react';
import {ModalProvider} from 'react-modal-hook';
import {ReactQueryConfigProvider} from 'react-query';
import {Provider} from 'react-redux';
import store from 'redux/store';
import theme from 'util/theme';

import Application from './Application';

const Root = () => (
	<Provider store={store}>
		<MuiThemeProvider theme={theme}>
			<SnackbarProvider maxSnack={1}>
				<ModalProvider>
					<ReactQueryConfigProvider config={queryConfig}>
						<CssBaseline />
						<Application />
					</ReactQueryConfigProvider>
				</ModalProvider>
			</SnackbarProvider>
		</MuiThemeProvider>
	</Provider>
);

export default Root;
