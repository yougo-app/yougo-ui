import React from 'react';
import {reduxForm} from 'redux-form';

const badProps = [
	'autofill',
	'clearAsyncError',
	'clearFields',
	'clearSubmitErrors',
	'pure',
	'submit',
	'triggerSubmit',
];

// this is a workaround for https://github.com/erikras/redux-form/issues/3705
const fixProps = (props, propNamespace) => {
	if (!propNamespace) {
		return props;
	}

	const newProps = Object.assign({}, props);
	badProps.forEach(prop => {
		if (prop in newProps) {
			newProps[propNamespace][prop] = newProps[prop];
			delete newProps[prop];
		}
	});
	return newProps;
};

const fixPropsHoc = reduxFormProps => WrappedComponent => props => (
	<WrappedComponent {...fixProps(props, reduxFormProps.propNamespace)} />
);

export default props => WrappedComponent => reduxForm(props)(fixPropsHoc(props)(WrappedComponent));
