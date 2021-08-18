import { LocalStorageApi } from '../localStorageApi.js';
import { CommentsList } from './list.js';
import { AddCommentForm } from './form.js';
import { v4 as uuidv4 } from 'uuid';
import '../css/widget.css';

const commentsStorage = new LocalStorageApi(`comments`);

class CommentsWidget extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {comments: []};
    
    this.onAddCommentFormSubmit = this.onAddCommentFormSubmit.bind(this);
    this.onDelCommentBtnClick = this.onDelCommentBtnClick.bind(this);
  }
  
  componentDidMount() {
    this.setState(() => {
      return {
        comments: commentsStorage.get(),
      };
    });
  }

  onAddCommentFormSubmit(event) {
    event.preventDefault();

    const commentObj = {
      id: uuidv4(),  //создаём идентификатор для элемента
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
    const delId = event.target.closest(`article`).id;

    //убираем комментарий, обновляем состояние
    this.setState((state, props) => {
      commentsStorage.filter(el => el.id !== delId);
      return {
        comments: commentsStorage.get(),
      }
    });
  }

  render() {
    const {comments} = this.state,
          delItemHandler = this.onDelCommentBtnClick,
          addCommentHandler = this.onAddCommentFormSubmit;
    return (<div className="comments__container">
      <CommentsList comments={comments} onDelBtnClick={delItemHandler} />
      <AddCommentForm onSubmit={addCommentHandler} />
    </div>);
  }

}

export { CommentsWidget };