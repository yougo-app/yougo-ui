import {denormalize} from 'normalizr';
import {createSelector} from 'reselect';
import goSchema from 'schemas/goSchema';
import getEntities from './getEntities';
import getGoIds from './getGoIds';

export default createSelector(getGoIds, getEntities, (ids, entities) => denormalize(ids, [goSchema], entities));
