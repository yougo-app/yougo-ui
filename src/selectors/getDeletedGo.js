import {denormalize} from 'normalizr';
import {createSelector} from 'reselect';
import goSchema from 'schemas/goSchema';
import getDeletedGoId from './getDeletedGoId';
import getEntities from './getEntities';

export default createSelector(getDeletedGoId, getEntities, (id, entitites) => denormalize(id, goSchema, entitites));
