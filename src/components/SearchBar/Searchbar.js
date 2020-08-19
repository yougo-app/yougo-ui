import {defaultSearchValue, useSearch} from 'context/SearchContext';
import SearchBar from 'material-ui-search-bar';
import React, {useCallback} from 'react';

const Searchbar = () => {
	const [value, setValue] = useSearch();
	const onChange = useCallback((v) => setValue(v), [setValue]);
	const onCancelSearch = useCallback(() => setValue(defaultSearchValue), [setValue]);
	return <SearchBar value={value} onChange={onChange} onCancelSearch={onCancelSearch} />;
};

export default Searchbar;
