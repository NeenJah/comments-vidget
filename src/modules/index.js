`use strict`;

import {CommentsVidget} from './react.vidget.js';
import {StorageArray} from './storageArray.js';

const root = document.querySelector(`.js-comments-vidget`),
      storage = new StorageArray(`comments`);

ReactDOM.render(
  <CommentsVidget comments={storage} />,
  root
);