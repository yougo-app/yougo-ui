import {reset} from 'redux-form';
import apiRequest from './apiRequest';
import closeModal from './closeModal';
import createGoRequest from './createGoRequest';

export default (go, source) => dispatch => {
	// console.log('submitting form');
	let onSuccess = [];

	// if the source was a modal, close the modal and reset the form
	if (source) {
		onSuccess = [...onSuccess, closeModal(source), reset(`${source}-form`)];
	}

	dispatch(apiRequest(createGoRequest(go), onSuccess));
};
