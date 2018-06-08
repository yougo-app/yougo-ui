/* eslint-disable react/prop-types */
import React from 'react';

export default WrappedComponent => ({input, ...props}) => (
	<WrappedComponent {...input} {...props} />
);
