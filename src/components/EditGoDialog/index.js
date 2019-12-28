import editGo from 'actions/editGo';
import EditGoDialog from 'components/EditGoDialog/EditGoDialog';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch, {go, hideModal}) => ({
	onSubmit: values => {
		dispatch(editGo(values, go));
		hideModal();
	},
});

export default connect(null, mapDispatchToProps)(EditGoDialog);
