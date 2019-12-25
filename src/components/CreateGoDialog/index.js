import createGo from 'actions/createGo';
import {CREATE_GO_DIALOG} from 'constants/components';
import {connect} from 'react-redux';
import {bindActionCreators, compose} from 'redux';
import {batchActions} from 'redux-batched-actions';
import {reset} from 'redux-form';
import reduxOpenComponent from 'util/ui/reduxOpenComponent';
import CreateGoDialog, {formName} from './CreateGoDialog';

const mapDispatchToProps = (dispatch, {onClose}) => ({
	...bindActionCreators(
		{
			onSubmit: values => batchActions([createGo(values), onClose()]),
			onExit: () => reset(formName),
		},
		dispatch,
	),
});

const hoc = compose(reduxOpenComponent(CREATE_GO_DIALOG), connect(null, mapDispatchToProps));

export default hoc(CreateGoDialog);
