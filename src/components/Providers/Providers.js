import {Auth0Provider} from '@auth0/auth0-react';
import {CssBaseline} from '@mui/material';
import {StyledEngineProvider, ThemeProvider} from '@mui/material/styles';
import {SearchProvider} from 'context/SearchContext';
import {node} from 'prop-types';
import React from 'react';
import {ModalProvider} from 'react-modal-hook';
import {QueryClientProvider} from 'react-query';
import authConfig from 'util/authConfig';
import queryClient from 'util/queryClient';
import theme from 'util/theme';

const Providers = ({children}) => (
	<Auth0Provider {...authConfig}>
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<QueryClientProvider client={queryClient}>
					<ModalProvider>
						<SearchProvider>
							<CssBaseline />
							{children}
						</SearchProvider>
					</ModalProvider>
				</QueryClientProvider>
			</ThemeProvider>
		</StyledEngineProvider>
	</Auth0Provider>
);

Providers.propTypes = {
	children: node.isRequired,
};

export default Providers;
