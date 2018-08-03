import reduxForm from '../../utils/reduxForm';
import GoForm from './GoForm';

export const name = 'go-form';

const propNamespace = 'form';

export default reduxForm({
	form: name,
	propNamespace,
})(GoForm);
