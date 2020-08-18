import search from 'actions/search';
import SearchBar from 'material-ui-search-bar';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import getSearchFilter from 'selectors/getSearchFilter';

const mapStateToProps = (state) => ({
	value: getSearchFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
	...bindActionCreators(
		{
			onChange: (value) => search({filter: value}),
			onCancelSearch: () => search({filter: ''}),
		},
		dispatch
	),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
