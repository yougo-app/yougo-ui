import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import getBookmarks from '../../actions/getBookmarks';
import getAliases from '../../selectors/getAliases';
import Body from './Body';

const mapStateToProps = state => ({
	aliases: getAliases(state),
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			load: getBookmarks,
		},
		dispatch,
	),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Body);
