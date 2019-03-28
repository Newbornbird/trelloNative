import uuid from 'uuid';
import moment from 'moment';

export function ADD_COLUMN() {
  return dispatch => {
    dispatch({
      type: 'ADD_COLUMN'
    })
  }
}

export function ADD_CARD(cardDescription, columnId) {
  return dispatch => {

    if(!cardDescription) {
      return
    }

    let cardId = uuid();

    dispatch({
      type: 'ADD_CARD_TO_COLUMNS',
      payload: {
        cardId,
        columnId
      }
    })

    dispatch({
      type: 'ADD_CARD_TO_CARDS',
      payload: {
        cardId,
        columnId,
        cardDescription,
      }
    })
  }
}

export function DELETE_CARD(columnId, cardId, prayerIsAnswered) {
  return dispatch => {
    
    if(prayerIsAnswered) {
      dispatch({
        type: 'DELETE_ANSWERED_CARD_FROM_COLUMN',
        payload: {
          columnId,
          cardId
        }
      })
    } else {
      dispatch({
        type: 'DELETE_CARD_FROM_COLUMN',
        payload: {
          columnId,
          cardId
        }
      })
    }

    dispatch({
      type: 'DELETE_CARD_FROM_CARDS',
      payload: {
        cardId
      }
    })
  }
}

export function TOGGLE_CARD_STATUS(columnId, cardId, cardStatus) { 
  return dispatch => {
    
    if(cardStatus) {
      dispatch({
        type: 'REPLACE_CARD_TO_CARD_ARRAY',
        payload: {
          cardId,
          columnId
        }
      });
    } else {
      dispatch({
        type: 'REPLACE_CARD_TO_ANSWERED_CARD_ARRAY',
        payload: {
          cardId,
          columnId
        }
      });
    }
    
    dispatch({
      type: 'CHANGE_STATUS_OF_CARD',
      payload: {
        cardId,
        cardStatus
      }
    })
  }
}

export function TO_PRAY(cardId) {
  return dispatch => {
    dispatch({
      type: 'TO_PRAY',
      payload: {
        cardId
      }
    })
  }
}

export function ADD_COMMENT(commentDescription, cardId) {
  return dispatch => {

    let commentId = uuid();
    let dateAdding = moment().format();


    dispatch({
      type: 'ADD_COMMENT_TO_CARD',
      payload: {
        commentId,
        cardId
      }
    })

    dispatch({
      type: 'ADD_COMMENT_TO_COMMENTS',
      payload: {
        cardId,
        commentId,
        commentDescription,
        dateAdding,
        author: 'Super man'
      }
    })
  }
}