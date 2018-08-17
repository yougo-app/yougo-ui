import reduxForm from '../../util/wrap/redux-form/reduxForm';
import GoForm from './GoForm';

export const name = 'go-form';

export default reduxForm({
	form: name,
	propNamespace: 'form',
})(GoForm);
