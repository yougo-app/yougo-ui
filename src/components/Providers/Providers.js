import {CssBaseline} from '@material-ui/core';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {queryConfig} from 'api/core';
import {SearchProvider} from 'context/SearchContext';
import {SnackbarProvider} from 'material-ui-snackbar-provider';
import {AuthProvider} from 'oidc-react/build/src';
import PropTypes from 'prop-types';
import React from 'react';
import {ModalProvider} from 'react-modal-hook';
import {ReactQueryConfigProvider} from 'react-query';
import authConfig from 'util/authConfig';
import theme from 'util/theme';

const Providers = ({children}) => (
	<AuthProvider {...authConfig}>
		<MuiThemeProvider theme={theme}>
			<SnackbarProvider>
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
	</AuthProvider>
);

Providers.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Providers;
