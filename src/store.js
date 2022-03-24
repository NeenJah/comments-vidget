import { createStore } from 'redux';
import LocalStorageApi from './localStorageApi.js';
import reduceComments from './reducers/reduceComments.js';

export const localStorageState = new LocalStorageApi(`comments`);
const initialState = localStorageState.get();
const commentsStore = createStore(reduceComments, initialState);

export default commentsStore;
