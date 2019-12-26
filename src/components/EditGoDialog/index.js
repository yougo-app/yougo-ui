import editGo from 'actions/editGo';
import {EDIT_GO_DIALOG} from 'constants/components';
import {connect} from 'react-redux';
import {bindActionCreators, compose} from 'redux';
import {batchActions} from 'redux-batched-actions';
import reduxOpenComponent from 'util/ui/reduxOpenComponent';
import EditGoDialog from './EditGoDialog';

const mapDispatchToProps = (dispatch, {onClose, go}) => ({
	...bindActionCreators(
		{onSubmit: values => batchActions([editGo(values, go), onClose()])},
		dispatch,
	),
});

const hoc = compose(reduxOpenComponent(EDIT_GO_DIALOG), connect(null, mapDispatchToProps));

export default hoc(EditGoDialog);
