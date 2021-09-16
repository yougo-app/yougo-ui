import {Close, Search} from '@mui/icons-material';
import {IconButton, InputAdornment, TextField} from '@mui/material';
import {useSearch} from 'context/SearchContext';
import PropTypes from 'prop-types';
import React, {useCallback} from 'react';

const SearchBar = ({cancelOnEscape}) => {
	const [value, setValue] = useSearch();
	const handleChange = useCallback((e) => setValue(e.target.value), [setValue]);
	const handleCancel = useCallback(() => setValue(''), [setValue]);
	const handleKeyUp = useCallback(
		(e) => {
			if (cancelOnEscape && (e.charCode === 27 || e.key === 'Escape')) {
				handleCancel();
			}
		},
		[cancelOnEscape, handleCancel]
	);

	const searchAdornment = (
		<InputAdornment position="start">
			<Search />
		</InputAdornment>
	);

	const cancelAdornment = (
		<InputAdornment position="end">
			<IconButton onClick={handleCancel}>
				<Close />
			</IconButton>
		</InputAdornment>
	);

	const hasSearched = !!value;

	return (
		<TextField
			fullWidth
			margin="dense"
			value={value}
			onChange={handleChange}
			onKeyUp={handleKeyUp}
			InputProps={{
				sx: {
					bgcolor: 'background.paper',
				},
				startAdornment: searchAdornment,
				endAdornment: hasSearched ? cancelAdornment : null,
			}}
		/>
	);
};
SearchBar.propTypes = {
	cancelOnEscape: PropTypes.bool,
};

SearchBar.defaultProps = {
	cancelOnEscape: true,
};

export default SearchBar;
