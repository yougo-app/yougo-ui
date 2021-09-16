import {TextField} from '@mui/material';
import classNames from 'classnames';
import {defaultSearchValue, useSearch} from 'context/SearchContext';
// import MuiSearchBar from 'material-ui-search-bar';
import PropTypes from 'prop-types';
import React, {useCallback} from 'react';

import useStyles from './useStyles';

const SearchBar = ({className}) => {
	const classes = useStyles();
	const [value, setValue] = useSearch();
	const onChange = useCallback((v) => setValue(v), [setValue]);
	const onCancelSearch = useCallback(() => setValue(defaultSearchValue), [setValue]);
	return (
		<TextField
			className={classNames(classes.root, className)}
			value={value}
			onChange={onChange}
			onCancelSearch={onCancelSearch}
		/>
	);
};

SearchBar.propTypes = {
	className: PropTypes.string,
};

SearchBar.defaultProps = {
	className: undefined,
};

export default SearchBar;
