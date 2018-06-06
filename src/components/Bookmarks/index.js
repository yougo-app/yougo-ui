import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBookmarks as getAliasesAction} from '../../actions/requests';
import {getAliases} from '../../selectors';
import Bookmarks from './Bookmarks';

const mapStateToProps = state => ({
	aliases: getAliases(state),
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			load: getAliasesAction,
		},
		dispatch,
	),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Bookmarks);
