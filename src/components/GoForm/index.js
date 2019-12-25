import React from 'react';
import reduxForm from 'util/wrap/redux-form/reduxForm';
import GoForm from './GoForm';

const setInitialValues = WrappedComponent => props => {
	const {go} = props;
	return go ? <WrappedComponent initialValues={go} {...props} /> : <WrappedComponent {...props} />;
};

export default setInitialValues(
	reduxForm({
		propNamespace: 'form',
		enableReinitialize: true,
	})(GoForm),
);
