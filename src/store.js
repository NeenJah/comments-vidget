import { createStore } from 'redux';
import reduceComments from './reducers/reduceComments.js';

const initialState = [];
const commentsStore = createStore(reduceComments, initialState);

export default commentsStore;
