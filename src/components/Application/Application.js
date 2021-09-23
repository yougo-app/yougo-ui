import Authenticated from 'components/Authenticated';
import PageLayout from 'components/PageLayout';
import {useAutoLogin} from 'hooks';
import {GoPage, GosPage, Unauthenticated} from 'pages';
import {Route, Routes} from 'react-router-dom';

const Application = () => {
	useAutoLogin();
	return (
		<Authenticated fallback={<Unauthenticated />}>
			<PageLayout>
				<Routes>
					<Route path="/" element={<GosPage />} />
					<Route path="/go/:go" element={<GoPage />} />
				</Routes>
			</PageLayout>
		</Authenticated>
	);
};

export default Application;
