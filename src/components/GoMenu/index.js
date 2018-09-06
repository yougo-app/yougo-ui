/* eslint-disable no-console */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {batchActions} from 'redux-batched-actions';
import openDeleteGoDialog from '../../actions/openDeleteGoDialog';
import Menus from '../../constants/Menus';
import reduxMenu from '../../util/ui/reduxMenu';
import GoMenu from './GoMenu';

const mapDispatchToProps = (dispatch, {go, onClose}) => ({
	...bindActionCreators(
		{
			onDelete: () => batchActions([openDeleteGoDialog(go), onClose()]),
			onCopy: () => {
				console.log(`Copying ${go.href}...`);
				return onClose();
			},
			onEdit: () => {
				console.log(`Editing ${go.id}...`);
				return onClose();
			},
		},
		dispatch,
	),
});

export default reduxMenu(Menus.GO_MENU)(
	connect(
		null,
		mapDispatchToProps,
	)(GoMenu),
);
