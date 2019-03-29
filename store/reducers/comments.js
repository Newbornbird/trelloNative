import { handleActions } from 'redux-actions';

let comments = handleActions({
  ADD_COMMENT_TO_COMMENTS: (state, action) => ({
        ...state, 
        [action.payload.commentId]: { 
          cardId: action.payload,
          commentDescription: action.payload.commentDescription,
          dateAdding: action.payload.dateAdding,
          author: action.payload.author
        },
  })
},
{
  com1: {
    cardId: 'c1',
    commentDescription: 'First Nah',
    dateAdding: '20110212',
    author: 'Super man'
  },
  com2: {
    cardId: 'c1',
    commentDescription: 'Second Nah',
    dateAdding: '20110212',
    author: 'Super man'
  },
  com3: {
    cardId: 'c1',
    commentDescription: 'third Nah',
    dateAdding: '20110212',
    author: 'Super man'
  }

})

export default comments;
