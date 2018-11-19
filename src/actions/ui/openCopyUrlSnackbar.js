import {SNACKBAR} from '../../constants/components';
import openComponent from '../../util/ui/actions/openComponent';

export default () => openComponent(SNACKBAR, {message: 'URL copied'});
