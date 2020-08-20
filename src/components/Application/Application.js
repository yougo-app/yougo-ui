import PageLayout from 'components/PageLayout';
import Providers from 'components/Providers';
import {GosPage} from 'pages';
import React from 'react';

const Application = () => (
	<Providers>
		<PageLayout>
			<GosPage />
		</PageLayout>
	</Providers>
);

export default Application;
