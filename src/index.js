`use strict`;

import {CommentsVidget} from './modules/react.vidget.js';
import {StorageArray} from './classes/storageArray.js';
import './css/vidget.css';

const root = document.querySelector(`.js-comments-vidget`),
      storage = new StorageArray(`comments`);

ReactDOM.render(
  <CommentsVidget comments={storage} />,
  root
);
