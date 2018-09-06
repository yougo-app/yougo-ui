import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {batchActions} from 'redux-batched-actions';
import deleteGo from '../../actions/requests/deleteGo';
import Components from '../../constants/Components';
import reduxOpenComponent from '../../util/ui/reduxOpenComponent';
import DeleteGoDialog from './DeleteGoDialog';

const mapDispatchToProps = (dispatch, {go, onClose}) => ({
	...bindActionCreators(
		{
			onConfirm: () => batchActions([deleteGo(go.id), onClose()]),
		},
		dispatch,
	),
});

export default reduxOpenComponent(Components.DELETE_GO)(
	connect(
		null,
		mapDispatchToProps,
	)(DeleteGoDialog),
);
