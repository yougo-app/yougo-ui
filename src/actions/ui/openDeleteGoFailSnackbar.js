import {SNACKBAR} from '../../constants/components';
import openComponent from '../../util/ui/actions/openComponent';

export default go => openComponent(SNACKBAR, {message: `Can't delete '${go.go}'`});
