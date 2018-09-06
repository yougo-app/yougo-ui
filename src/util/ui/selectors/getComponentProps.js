import {createSelector} from 'reselect';
import getComponent from './getComponent';

export default createSelector(getComponent, component => (component ? component.props : {}));
