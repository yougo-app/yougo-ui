import 'typeface-roboto';
import 'ulog';

import Application from 'components';
import Providers from 'components/Providers';
import {StrictMode} from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<StrictMode>
		<Providers>
			<Application />
		</Providers>
	</StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
