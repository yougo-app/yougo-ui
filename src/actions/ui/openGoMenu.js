import Components from '../../constants/Components';
import openComponent from '../../util/ui/actions/openComponent';

export default (anchorEl, go) => openComponent(Components.GO_MENU, {anchorEl, go});
