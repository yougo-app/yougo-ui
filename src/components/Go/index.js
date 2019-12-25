import openGoMenu from 'actions/ui/openGoMenu';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Go from './Go';

const mapDispatchToProps = (dispatch, {go}) => ({
	...bindActionCreators(
		{
			// todo: look at using the anchorPosition prop rather than anchorEl so we're not passing an element through redux
			openMenu: e => openGoMenu(e.currentTarget, go),
		},
		dispatch,
	),
});

export default connect(null, mapDispatchToProps)(Go);
