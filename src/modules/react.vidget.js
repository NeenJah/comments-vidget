import {constants} from './constants.js';
import {CommentsList} from './react.list.js';
import {AddCommentForm} from './react.form.js';
import {getNodeIndex} from './getNodeIndex.js';

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
      key: Date.now(),
      author: event.target[constants.commentForm.AUTHOR_NAME].value,
      comment: event.target[constants.commentForm.COMMENT_NAME].value,
      time: new Date(),
    }
    
    this.setState((state, props) => {
      state.comments.push(commentObj);
      //storage.set(state.comments);
      return {
        comments: state.comments,
      };
    });
    
    event.target.reset();
  }
  
  onDelCommentBtnClick(event) {
    if(!event.target.matches(`.${constants.DEL_BTN_CLASS}`)) return;
    
    const parent = event.target.closest(`.${constants.ITEM_CLASS}`),
          index = getNodeIndex(parent);
          
    this.setState((state, props) => {
      state.comments.splice(index, 1);
      //storage.set(state.comments);
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

export {CommentsVidget};