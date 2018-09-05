import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import openGoMenu from '../../actions/openGoMenu';
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

export default connect(
	null,
	mapDispatchToProps,
)(Go);
