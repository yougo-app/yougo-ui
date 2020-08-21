import PageLayout from 'components/PageLayout';
import Providers from 'components/Providers';
import {GosPage} from 'pages';
import React from 'react';
import {Route, Routes} from 'react-router-dom';

const Application = () => {
	return (
		<Providers>
			<PageLayout>
				<Routes>
					<Route path="/" element={<GosPage />} />
				</Routes>
			</PageLayout>
		</Providers>
	);
};

export default Application;
