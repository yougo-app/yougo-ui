import {connect} from 'react-redux';
import {bindActionCreators, compose} from 'redux';
import {batchActions} from 'redux-batched-actions';
import {reset} from 'redux-form';
import editGo from '../../actions/editGo';
import {EDIT_GO_DIALOG} from '../../constants/components';
import reduxOpenComponent from '../../util/ui/reduxOpenComponent';
import EditGoDialog, {formName} from './EditGoDialog';

const mapDispatchToProps = (dispatch, {onClose}) => ({
	...bindActionCreators(
		{
			onSubmit: values => batchActions([editGo(values), onClose()]),
			onExit: () => reset(formName),
		},
		dispatch,
	),
});

const hoc = compose(
	reduxOpenComponent(EDIT_GO_DIALOG),
	connect(
		null,
		mapDispatchToProps,
	),
);

export default hoc(EditGoDialog);
