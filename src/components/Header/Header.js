import AddIcon from '@mui/icons-material/Add';
import {AppBar, Box, IconButton, Toolbar, Typography} from '@mui/material';
import SearchBar from 'components/SearchBar';
import UserProfileButton from 'components/UserProfileButton';
import {useCreateGo} from 'hooks';
import React from 'react';

const Header = ({...props}) => {
	const [createGo] = useCreateGo();

	return (
		<AppBar position="static" sx={{bgcolor: 'primary.dark'}} {...props}>
			<Toolbar>
				<Box>
					<Typography variant="h6" color="inherit">
						Yougo
					</Typography>
				</Box>
				<Box flexGrow={1} />
				<Box flexGrow={1} maxWidth={400} marginX={1}>
					<SearchBar cancelOnEscape />
				</Box>
				<Box display="flex" justifyContent="flex-end">
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
