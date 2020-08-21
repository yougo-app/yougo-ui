import Authorised from 'components/Authorised';
import PageLayout from 'components/PageLayout';
import Providers from 'components/Providers';
import {GosPage, Unauthenticated} from 'pages';
import React from 'react';
import {Route, Routes} from 'react-router-dom';

const Application = () => {
	return (
		<Providers>
			<PageLayout>
				<Authorised fallback={<Unauthenticated />}>
					<Routes>
						<Route path="/" element={<GosPage />} />
					</Routes>
				</Authorised>
			</PageLayout>
		</Providers>
	);
};

export default Application;
