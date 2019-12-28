import copyUrl from 'actions/copyUrl';
import deleteGo from 'actions/deleteGo';
import {connect} from 'react-redux';
import GoMenu from './GoMenu';

const mapDispatchToProps = (dispatch, {go, onClose}) => ({
	onDelete: () => {
		dispatch(deleteGo(go));
		onClose();
	},
	onCopy: () => {
		dispatch(copyUrl(go.href));
		onClose();
	},
});

export default connect(null, mapDispatchToProps)(GoMenu);
