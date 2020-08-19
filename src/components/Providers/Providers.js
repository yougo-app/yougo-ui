import {CssBaseline} from '@material-ui/core';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {queryConfig} from 'api/core';
import {SearchProvider} from 'context/SearchContext';
import {SnackbarProvider} from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import {ModalProvider} from 'react-modal-hook';
import {ReactQueryConfigProvider} from 'react-query';
import {Provider} from 'react-redux';
import store from 'redux/store';
import theme from 'util/theme';

const Providers = ({children}) => (
	<Provider store={store}>
		<MuiThemeProvider theme={theme}>
			<SnackbarProvider maxSnack={1}>
				<ModalProvider>
					<ReactQueryConfigProvider config={queryConfig}>
						<SearchProvider>
							<CssBaseline />
							{children}
						</SearchProvider>
					</ReactQueryConfigProvider>
				</ModalProvider>
			</SnackbarProvider>
		</MuiThemeProvider>
	</Provider>
);

Providers.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Providers;
