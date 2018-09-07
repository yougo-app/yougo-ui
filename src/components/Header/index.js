import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import openCreateGoDialog from '../../actions/ui/openCreateGoDialog';
import Header from './Header';

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(
		{
			createGo: () => openCreateGoDialog(),
		},
		dispatch,
	),
});

export default connect(
	null,
	mapDispatchToProps,
)(Header);
