import React from 'react';
import Modals from '../../constants/Modals';

export default ({currentModal}) => {
	if (currentModal) {
		const {key, props} = currentModal;
		const Component = Modals[key].component;
		return <Component {...props} />;
	}
	return null;
};
