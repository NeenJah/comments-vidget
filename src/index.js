import React from 'react';
import ReactDOM from 'react-dom';
import CommentsWidget from './smart-components/widget.js';
import commentsStore from './store.js';
import './css/widget.css';

const root = document.querySelector(`.js-comments-vidget`);

ReactDOM.render(<CommentsWidget store={commentsStore} />, root);
