import {withStyles} from '@material-ui/core/styles';
import {defaultSearchValue, useSearch} from 'context/SearchContext';
import MuiSearchBar from 'material-ui-search-bar';
import PropTypes from 'prop-types';
import React, {useCallback} from 'react';

const styles = () => ({
	root: {
		width: '100%',
	},
});

const SearchBar = ({classes}) => {
	const [value, setValue] = useSearch();
	const onChange = useCallback((v) => setValue(v), [setValue]);
	const onCancelSearch = useCallback(() => setValue(defaultSearchValue), [setValue]);
	return (
		<MuiSearchBar
			className={classes.root}
			value={value}
			onChange={onChange}
			onCancelSearch={onCancelSearch}
		/>
	);
};

SearchBar.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchBar);
