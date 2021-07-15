import { LocalStorageApi } from '../localStorageApi.js';
import { CommentsList } from './list.js';
import { AddCommentForm } from './form.js';
import { v4 as uuidv4 } from 'uuid';

const commentsStorage = new LocalStorageApi(`comments`);

class CommentsWidget extends React.Component {

  constructor(props) {
    super(props);

    this.state = {comments: commentsStorage.get()};

    this.onAddCommentFormSubmit = this.onAddCommentFormSubmit.bind(this);
    this.onDelCommentBtnClick = this.onDelCommentBtnClick.bind(this);
  }

  onAddCommentFormSubmit(event) {
    event.preventDefault();

    const commentObj = {
      key: uuidv4(),  //создаём идентификатор для элемента
      author: event.target.author.value,
      comment: event.target.comment.value,
      time: new Date(),
    };

    //добавляем комментарий, обновляем состояние
    this.setState((state, props) => {
      commentsStorage.push(commentObj);
      return {
        comments: commentsStorage.get(),
      };
    });

    event.target.reset(); //сбрасываем форму
  }

  onDelCommentBtnClick(event) {

    //получаем индекс комментария
    const parentEl = event.target.closest(`.comments__item`),
      index = Array.from(parentEl.parentNode.children).indexOf(parentEl);

    //убираем комментарий, обновляем состояние
    this.setState((state, props) => {
      commentsStorage.splice(index, 1);
      return {
        comments: commentsStorage.get(),
      }
    });
  }

  render() {
    return (<div className="comments__container">
      <CommentsList comments={this.state.comments} onDelItem={this.onDelCommentBtnClick} />
      <AddCommentForm onSubmit={this.onAddCommentFormSubmit} />
    </div>);
  }

}

export { CommentsWidget };