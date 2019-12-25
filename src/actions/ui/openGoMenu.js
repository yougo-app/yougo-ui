import {GO_MENU} from 'constants/components';
import openComponent from 'util/ui/actions/openComponent';

export default (anchorEl, go) => openComponent(GO_MENU, {anchorEl, go});
