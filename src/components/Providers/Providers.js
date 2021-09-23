import {CssBaseline} from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';
import Auth0Provider from 'components/Auth0Provider';
import {SearchProvider} from 'context/SearchContext';
import {SnackbarProvider} from 'notistack';
import {node} from 'prop-types';
import {ModalProvider} from 'react-modal-hook';
import {QueryClientProvider} from 'react-query';
import {BrowserRouter} from 'react-router-dom';
import queryClient from 'util/queryClient';
import theme from 'util/theme';

const Providers = ({children}) => (
	<BrowserRouter>
		<Auth0Provider>
			<QueryClientProvider client={queryClient}>
				<SearchProvider>
					<ThemeProvider theme={theme}>
						<SnackbarProvider maxSnack={3}>
							<ModalProvider>
								<CssBaseline />
								{children}
							</ModalProvider>
						</SnackbarProvider>
					</ThemeProvider>
				</SearchProvider>
			</QueryClientProvider>
		</Auth0Provider>
	</BrowserRouter>
);

Providers.propTypes = {
	children: node.isRequired,
};

export default Providers;
