import {CssBaseline} from '@material-ui/core';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {SearchProvider} from 'context/SearchContext';
import {SnackbarProvider} from 'material-ui-snackbar-provider';
import {AuthProvider} from 'oidc-react';
import PropTypes from 'prop-types';
import React from 'react';
import {ModalProvider} from 'react-modal-hook';
import {QueryClientProvider} from 'react-query';
import authConfig from 'util/authConfig';
import queryClient from 'util/queryClient';
import theme from 'util/theme';

const Providers = ({children}) => (
	<AuthProvider {...authConfig}>
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
	</AuthProvider>
);

Providers.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Providers;
