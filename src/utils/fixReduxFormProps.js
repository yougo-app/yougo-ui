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
export default (props, propNamespace) => {
	const newProps = Object.assign({}, props);
	badProps.forEach(prop => {
		if (prop in newProps) {
			newProps[propNamespace][prop] = newProps[prop];
			delete newProps[prop];
		}
	});
	return newProps;
};
