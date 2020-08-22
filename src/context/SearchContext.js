import PropTypes from 'prop-types';
import React, {createContext, useContext, useState} from 'react';

export const defaultSearchValue = '';
const SearchContext = createContext(defaultSearchValue);
const SetSearchContext = createContext(defaultSearchValue);

export const SearchProvider = ({children}) => {
	const [searchValue, setSearchString] = useState(defaultSearchValue);
	return (
		<SearchContext.Provider value={searchValue}>
			<SetSearchContext.Provider value={setSearchString}>{children}</SetSearchContext.Provider>
		</SearchContext.Provider>
	);
};

SearchProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export function useSearchContext() {
	const context = useContext(SearchContext);
	if (context === undefined) {
		throw new Error('useSearch must be used within a SearchContext');
	}
	return context;
}

export function useSetSearchContext() {
	const context = useContext(SetSearchContext);
	if (context === undefined) {
		throw new Error('useSearch must be used within a SearchContext');
	}
	return context;
}

export function useSearch() {
	return [useSearchContext(), useSetSearchContext()];
}
