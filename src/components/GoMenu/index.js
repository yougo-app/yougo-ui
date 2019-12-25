import copyUrl from 'actions/copyUrl';
import deleteGo from 'actions/deleteGo';
import openEditGoDialog from 'actions/ui/openEditGoDialog';
import {GO_MENU} from 'constants/components';
import {connect} from 'react-redux';
import {bindActionCreators, compose} from 'redux';
import {batchActions} from 'redux-batched-actions';
import reduxOpenComponent from 'util/ui/reduxOpenComponent';
import GoMenu from './GoMenu';

const mapDispatchToProps = (dispatch, {go, onClose}) => ({
	...bindActionCreators(
		{
			onDelete: () => batchActions([deleteGo(go), onClose]),
			onCopy: () => batchActions([copyUrl(go.href), onClose]),
			onEdit: () => batchActions([openEditGoDialog(go), onClose]),
		},
		dispatch,
	),
});

const hoc = compose(reduxOpenComponent(GO_MENU), connect(null, mapDispatchToProps));

export default hoc(GoMenu);
