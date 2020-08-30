import Authenticated from 'components/Authenticated';
import PageLayout from 'components/PageLayout';
import Providers from 'components/Providers';
import {GosPage, Unauthenticated} from 'pages';
import GoPage from 'pages/GoPage/GoPage';
import React from 'react';
import {Route, Routes} from 'react-router-dom';

const Application = () => (
	<Providers>
		<PageLayout>
			<Authenticated fallback={<Unauthenticated />}>
				<Routes basename={process.env.PUBLIC_URL}>
					<Route path="/" element={<GosPage />} />
					<Route path="/go/:go" element={<GoPage />} />
				</Routes>
			</Authenticated>
		</PageLayout>
	</Providers>
);

export default Application;
