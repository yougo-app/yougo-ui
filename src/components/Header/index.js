import search from 'actions/search';
import openCreateGoDialog from 'actions/ui/openCreateGoDialog';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from './Header';

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(
		{
			createGo: () => openCreateGoDialog(),
			search: value => search({filter: value}),
			clearSearch: () => search({filter: ''}),
		},
		dispatch,
	),
});

export default connect(null, mapDispatchToProps)(Header);
