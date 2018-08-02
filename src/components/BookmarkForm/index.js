import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import fixReduxFormProps from '../../utils/fixReduxFormProps';
import BookmarkForm from './BookmarkForm';

export const name = 'bookmark-form';

const propNamespace = 'form';

const mergeProps = (stateProps, dispatchProps, ownProps) =>
	Object.assign({}, fixReduxFormProps(ownProps, propNamespace), stateProps, dispatchProps);

export default reduxForm({
	form: name,
	propNamespace,
})(
	connect(
		null,
		null,
		mergeProps,
	)(BookmarkForm),
);
