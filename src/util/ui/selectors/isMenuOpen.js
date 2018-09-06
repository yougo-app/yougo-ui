import {createSelector} from 'reselect';
import getMenu from './getMenu';

export default createSelector(getMenu, menu => (menu ? menu.open : false));
