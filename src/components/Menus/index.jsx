import {connect} from 'react-redux';
import getMenus from '../../selectors/getMenus';
import Menus from './Menus';

const mapStateToProps = state => ({
	menu: getMenus(state),
});

export default connect(mapStateToProps)(Menus);
