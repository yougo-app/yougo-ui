import createGo from 'actions/createGo';
import {connect} from 'react-redux';
import CreateGoDialog from './CreateGoDialog';

const mapDispatchToProps = (dispatch, {hideModal}) => ({
	onSubmit: values => {
		dispatch(createGo(values));
		hideModal();
	},
});

export default connect(null, mapDispatchToProps)(CreateGoDialog);
