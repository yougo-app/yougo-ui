import getDeletedGo from '../selectors/getDeletedGo';
import createGo from './createGo';

export default () => (dispatch, getState) => dispatch(createGo(getDeletedGo(getState())));
