import reduxForm from '../../util/wrap/redux-form/reduxForm';
import GoForm from './GoForm';

export default reduxForm({
	propNamespace: 'form',
})(GoForm);
