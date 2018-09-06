import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {batchActions} from 'redux-batched-actions';
import deleteGo from '../../actions/deleteGo';
import Components from '../../constants/Components';
import reduxOpenComponent from '../../util/ui/reduxOpenComponent';
import GoMenu from './GoMenu';

const mapDispatchToProps = (dispatch, {go, onClose}) => ({
	...bindActionCreators(
		{
			onDelete: () => batchActions([deleteGo(go), onClose]),
			onCopy: () => {
				// eslint-disable-next-line no-console
				console.log(`Copying ${go.href}...`);
				return onClose();
			},
			onEdit: () => {
				// eslint-disable-next-line no-console
				console.log(`Editing ${go.id}...`);
				return onClose();
			},
		},
		dispatch,
	),
});

export default reduxOpenComponent(Components.GO_MENU)(
	connect(
		null,
		mapDispatchToProps,
	)(GoMenu),
);
