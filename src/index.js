`use strict`;

import { CommentsVidget } from './components/vidget.smart.js';
import { LocalStorageApi } from './localStorageApi.js';
import './css/vidget.css';

const root = document.querySelector(`.js-comments-vidget`),
  storage = new LocalStorageApi(`comments`);

ReactDOM.render(
  <CommentsVidget comments={storage} />,
  root
);
