/* eslint-disable react/prop-types */
import {useEffect, useState} from 'react';

export default ({snackbars, enqueueSnackbar, closeSnackbar, removeSnackbar}) => {
	const [displayed, setDisplayed] = useState([]);

	useEffect(() => {
		snackbars.forEach(({key, message, options = {}, dismissed = false}) => {
			if (dismissed) {
				closeSnackbar(key);
			} else if (!displayed.includes(key)) {
				enqueueSnackbar(message, {
					key,
					...options,
					onExited: event => {
						removeSnackbar(key);
						setDisplayed(displayed.filter(k => key !== k));
						if (options.onExited) {
							options.onExited(event, key);
						}
					},
				});
				setDisplayed([...displayed, key]);
			}
		});
	});

	return null;
};
