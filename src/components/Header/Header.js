import AddIcon from '@mui/icons-material/Add';
import {AppBar, Box, IconButton, Toolbar, Typography} from '@mui/material';
import SearchBar from 'components/SearchBar';
import UserProfileButton from 'components/UserProfileButton';
import {useCreateGo} from 'hooks';

const sidebarWidth = 0.25;
const sidebarMinWidth = 140;

const Header = ({...props}) => {
	const [createGo] = useCreateGo();

	return (
		<AppBar position="static" sx={{bgcolor: 'primary.dark'}} {...props}>
			<Toolbar>
				<Box width={sidebarWidth} minWidth={sidebarMinWidth}>
					<Typography variant="h6" color="inherit">
						Yougo
					</Typography>
				</Box>
				<Box flexGrow={1} marginX={1}>
					<SearchBar cancelOnEscape />
				</Box>
				<Box
					width={sidebarWidth}
					minWidth={sidebarMinWidth}
					display="flex"
					justifyContent="flex-end"
				>
					<IconButton onClick={createGo} color="inherit" size="large">
						<AddIcon />
					</IconButton>
					<UserProfileButton />
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
