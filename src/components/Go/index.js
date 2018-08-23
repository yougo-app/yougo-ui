import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import openGoMenu from '../../actions/openGoMenu';
import Go from './Go';

const mapDispatchToProps = (dispatch, {go}) => ({
	...bindActionCreators(
		{
			openMenu: event =>
				openGoMenu({
					go,
					anchorEl: event.currentTarget,
				}),
		},
		dispatch,
	),
});

export default connect(
	null,
	mapDispatchToProps,
)(Go);
