import getDeletedGo from 'selectors/getDeletedGo';

import createGo from './createGo';

const undoDelete = (dispatch, getState) => dispatch(createGo(getDeletedGo(getState())));
export default undoDelete;
