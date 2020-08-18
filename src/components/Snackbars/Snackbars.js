import removeSnackbar from 'actions/ui/removeSnackbar';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import getSnackbars from 'selectors/getSnackbars';

export default ({enqueueSnackbar, closeSnackbar}) => {
	const [displayed, setDisplayed] = useState([]);
	const snackbars = useSelector(getSnackbars);
	const dispatch = useDispatch();

	useEffect(() => {
		snackbars.forEach(({key, message, options = {}, dismissed = false}) => {
			if (dismissed) {
				closeSnackbar(key);
			} else if (!displayed.includes(key)) {
				enqueueSnackbar(message, {
					key,
					...options,
					onExited: (event) => {
						dispatch(removeSnackbar(key));
						setDisplayed(displayed.filter((k) => key !== k));
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
