import Body from 'components/Body';
import Global from 'components/Global';
import Header from 'components/Header';
import React from 'react';

const Application = () => {
	return (
		<div className="layout">
			<Header className="header" />
			<Body className="content" />
			<Global />
		</div>
	);
};
export default Application;
