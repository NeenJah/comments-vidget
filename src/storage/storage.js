import { configureStore } from `@reduxjs/toolkit`;
import commentsReducer from `./commentsSlice.js`;

export default configureStore({
    reducer: {
        comments: commentsReducer,
    },
});