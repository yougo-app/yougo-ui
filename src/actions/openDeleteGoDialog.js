import Modals from '../constants/Modals';
import openModal from './openModal';

export default go =>
	openModal({
		key: Modals.DELETE_GO.key,
		props: {
			go,
		},
	});
