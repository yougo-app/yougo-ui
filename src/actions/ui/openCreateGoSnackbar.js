import {SNACKBAR} from '../../constants/components';
import openComponent from '../../util/ui/actions/openComponent';

export default name => openComponent(SNACKBAR, {message: `Added '${name}'`});
