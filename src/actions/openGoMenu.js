import Menus from '../constants/Menus';
import openMenu from './openMenu';

export default props =>
	openMenu({
		key: Menus.GO_MENU.key,
		props,
	});
