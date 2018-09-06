import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {batchActions} from 'redux-batched-actions';
import deleteGo from '../../actions/requests/deleteGo';
import Modals from '../../constants/Modals';
import reduxModal from '../../util/ui/reduxModal';
import DeleteGoDialog from './DeleteGoDialog';

const mapDispatchToProps = (dispatch, {go, onClose}) => ({
	...bindActionCreators(
		{
			onConfirm: () => batchActions([deleteGo(go.id), onClose()]),
		},
		dispatch,
	),
});

export default reduxModal(Modals.DELETE_GO)(
	connect(
		null,
		mapDispatchToProps,
	)(DeleteGoDialog),
);
