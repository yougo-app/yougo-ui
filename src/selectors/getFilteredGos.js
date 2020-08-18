import {createSelector} from 'reselect';
import getGos from './getGos';
import getSearchFilter from './getSearchFilter';

export default createSelector(getGos, getSearchFilter, (gos, filter) => {
	if (filter.length <= 2) {
		return gos;
	}
	return gos.filter((go) => Object.values(go).some((value) => value.toLowerCase().indexOf(filter) >= 0));
});
