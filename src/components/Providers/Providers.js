import {Auth0Provider} from '@auth0/auth0-react';
import {CssBaseline} from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';
import {SearchProvider} from 'context/SearchContext';
import {SnackbarProvider} from 'notistack';
import {node} from 'prop-types';
import {ModalProvider} from 'react-modal-hook';
import {QueryClientProvider} from 'react-query';
import authConfig from 'util/authConfig';
import queryClient from 'util/queryClient';
import theme from 'util/theme';

const Providers = ({children}) => (
	<Auth0Provider {...authConfig}>
		<ThemeProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				<SnackbarProvider maxSnack={3}>
					<ModalProvider>
						<SearchProvider>
							<CssBaseline />
							{children}
						</SearchProvider>
					</ModalProvider>
				</SnackbarProvider>
			</QueryClientProvider>
		</ThemeProvider>
	</Auth0Provider>
);

Providers.propTypes = {
	children: node.isRequired,
};

export default Providers;
