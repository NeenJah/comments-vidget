import { constants } from '../constants.js';
import { getTimeString } from '../methods/getTimeString.js';

class CommentItem extends React.Component {

  render() {
    return <li className={constants.ITEM_CLASS}>
      <div>
        <h3>{this.props.author}</h3>
        <p>{this.props.comment}</p>
        <time dateTime={getTimeString(new Date(this.props.time), true)}>{new Date(this.props.time).toLocaleString(`ru`)}</time>
      </div>
      <button className={constants.DEL_BTN_CLASS} onClick={this.props.onDelete}>{constants.DEL_BTN_TEXT}</button>
    </li>;
  }

}

export { CommentItem };