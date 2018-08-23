import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import closeModal from '../../actions/closeModal';
import deleteGo from '../../actions/deleteGo';
import DeleteGoDialog from './DeleteGoDialog';

const mapDispatchToProps = (dispatch, {go: {id}}) => ({
	...bindActionCreators(
		{
			onConfirm: () => deleteGo(id),
			onClose: () => closeModal(),
		},
		dispatch,
	),
});

export default connect(
	null,
	mapDispatchToProps,
)(DeleteGoDialog);
