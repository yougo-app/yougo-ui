import React from 'react';
import Menus from '../../constants/Menus';

export default ({menu}) => {
	if (menu) {
		const {key, props} = menu;
		const Component = Menus[key].component;
		return <Component {...props} />;
	}
	return null;
};
