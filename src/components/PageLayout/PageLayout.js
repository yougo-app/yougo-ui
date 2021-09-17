import {Box, Stack} from '@mui/material';
import Container from '@mui/material/Container';
import Header from 'components/Header';
import PropTypes from 'prop-types';

const PageLayout = ({children}) => (
	<Stack minHeight="100vh" spacing={2} alignItems="center">
		<Box minWidth={1}>
			<Header />
		</Box>
		<Container component="main" sx={{flexGrow: 1, minHeight: 1}}>
			{children}
		</Container>
		<Box minWidth={1} />
	</Stack>
);

PageLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

PageLayout.defaultProps = {};

export default PageLayout;
