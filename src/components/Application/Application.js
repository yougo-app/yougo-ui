import getGos from 'actions/requests/getGos';
import Body from 'components/Body';
import Global from 'components/Global';
import Header from 'components/Header';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

export default () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getGos());
	}, [dispatch]);

	return (
		<div className="layout">
			<Header className="header" />
			<Body className="content" />
			<Global />
		</div>
	);
};
