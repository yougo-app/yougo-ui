import 'ulog';
import 'typeface-roboto';

import Application from 'components';
import {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import history from 'util/history';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<StrictMode>
		<BrowserRouter history={history}>
			<Application />
		</BrowserRouter>
	</StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
