import reduxForm from '../../utils/reduxForm';
import BookmarkForm from './BookmarkForm';

export const name = 'bookmark-form';

const propNamespace = 'form';

export default reduxForm({
	form: name,
	propNamespace,
})(BookmarkForm);
