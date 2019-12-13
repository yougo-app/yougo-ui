export default (
	{meta: {touched, error, warning} = {}, input, ...props},
	errorProp = 'helperText',
) =>
	touched && (error || warning)
		? {
				...props,
				...input,
				error: error || warning,
				helperText: error || warning,
		  }
		: {...input, ...props};
