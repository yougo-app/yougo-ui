import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import deleteGo from '../../actions/requests/deleteGo';
import GoActions from './GoActions';

const mapDispatchToProps = (dispatch, {goId}) => ({
	...bindActionCreators(
		{
			onDelete: () => deleteGo(goId),
		},
		dispatch,
	),
});

export default connect(
	null,
	mapDispatchToProps,
)(GoActions);
