import openMenu from '../util/ui/actions/openMenu';
import Menus from '../constants/Menus';

export default (anchorEl, go) => openMenu(Menus.GO_MENU, {anchorEl, go});
