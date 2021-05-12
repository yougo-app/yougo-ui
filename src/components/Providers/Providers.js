import {Auth0Provider} from '@auth0/auth0-react';
import {CssBaseline} from '@material-ui/core';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {SearchProvider} from 'context/SearchContext';
import {SnackbarProvider} from 'material-ui-snackbar-provider';
import {node} from 'prop-types';
import React from 'react';
import {ModalProvider} from 'react-modal-hook';
import {QueryClientProvider} from 'react-query';
import authConfig from 'util/authConfig';
import queryClient from 'util/queryClient';
import theme from 'util/theme';

const Providers = ({children}) => (
	<Auth0Provider {...authConfig}>
		<MuiThemeProvider theme={theme}>
			<SnackbarProvider>
				<QueryClientProvider client={queryClient}>
					<ModalProvider>
						<SearchProvider>
							<CssBaseline />
							{children}
						</SearchProvider>
					</ModalProvider>
				</QueryClientProvider>
			</SnackbarProvider>
		</MuiThemeProvider>
	</Auth0Provider>
);

Providers.propTypes = {
	children: node.isRequired,
};

export default Providers;
