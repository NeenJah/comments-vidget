`use strict`;

import { CommentsWidget } from './components/widget.js';
import './css/vidget.css';

const root = document.querySelector(`.js-comments-vidget`);

ReactDOM.render(
  <CommentsWidget />,
  root
);