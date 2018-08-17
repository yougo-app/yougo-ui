import React from 'react';
import {reduxForm} from 'redux-form';
import fixProps from './fixProps';

const FixReduxFormProps = reduxFormProps => WrappedComponent => props => (
	<WrappedComponent {...fixProps(props, reduxFormProps.propNamespace)} />
);

export default props => WrappedComponent =>
	reduxForm(props)(FixReduxFormProps(props)(WrappedComponent));
