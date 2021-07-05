import { constants } from '../constants.js';
import { CommentsList } from './react.list.js';
import { AddCommentForm } from './react.form.js';
import { getNodeIndex } from '../methods/getNodeIndex.js';

class CommentsVidget extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      comments: props.comments,
    };

    this.onAddCommentFormSubmit = this.onAddCommentFormSubmit.bind(this);
    this.onDelCommentBtnClick = this.onDelCommentBtnClick.bind(this);
  }

  onAddCommentFormSubmit(event) {
    event.preventDefault();

    const commentObj = {
      key: Date.now(),  //берем в качестве ключа текущее время в миллисекундах (react требует id для каждого компонента)
      author: event.target[constants.commentForm.AUTHOR_NAME].value,
      comment: event.target[constants.commentForm.COMMENT_NAME].value,
      time: new Date(),
    };

    //добавляем комментарий в состояния, обновляем
    this.setState((state, props) => {
      state.comments.push(commentObj);
      return {
        comments: state.comments,
      };
    });

    event.target.reset(); //сбрасываем форму
  }

  onDelCommentBtnClick(event) {
    if (!event.target.matches(`.${constants.DEL_BTN_CLASS}`)) return;

    //получаем индекс комментария
    const parent = event.target.closest(`.${constants.ITEM_CLASS}`),
      index = getNodeIndex(parent);

    //убираем комментарий из состояния, обновляем
    this.setState((state, props) => {
      state.comments.splice(index, 1);
      return {
        comments: state.comments,
      }
    });
  }

  render() {
    return <div className={constants.CONTAINER_CLASS}>
      <CommentsList comments={this.state.comments} onDelItem={this.onDelCommentBtnClick} />
      <AddCommentForm onSubmit={this.onAddCommentFormSubmit} />
    </div>;
  }

}

export { CommentsVidget };