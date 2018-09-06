import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Modals from '../../constants/Modals';
import openModal from '../../util/ui/actions/openModal';
import Header from './Header';

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(
		{
			createGo: () => openModal(Modals.CREATE_GO),
		},
		dispatch,
	),
});

export default connect(
	null,
	mapDispatchToProps,
)(Header);
