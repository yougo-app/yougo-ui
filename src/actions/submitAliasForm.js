import {reset} from 'redux-form';
import apiRequest from './apiRequest';
import closeModal from './closeModal';
import createAlias from './createAlias';

export default (alias, source) => dispatch => {
	// console.log('submitting form');
	let onSuccess = [];

	// if the source was a modal, close the modal and reset the form
	if (source) {
		onSuccess = [...onSuccess, closeModal(source), reset(`${source}-form`)];
	}

	dispatch(apiRequest(createAlias(alias), onSuccess));
};
