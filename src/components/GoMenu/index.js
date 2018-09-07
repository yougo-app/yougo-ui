import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {batchActions} from 'redux-batched-actions';
import copyUrl from '../../actions/copyUrl';
import deleteGo from '../../actions/deleteGo';
import {GO_MENU} from '../../constants/components';
import reduxOpenComponent from '../../util/ui/reduxOpenComponent';
import GoMenu from './GoMenu';

const mapDispatchToProps = (dispatch, {go, onClose}) => ({
	...bindActionCreators(
		{
			onDelete: () => batchActions([deleteGo(go), onClose]),
			onCopy: () => batchActions([copyUrl(go.href), onClose]),
			onEdit: () => {
				// eslint-disable-next-line no-console
				console.log(`Editing ${go.id}...`);
				return onClose();
			},
		},
		dispatch,
	),
});

export default reduxOpenComponent(GO_MENU)(
	connect(
		null,
		mapDispatchToProps,
	)(GoMenu),
);
