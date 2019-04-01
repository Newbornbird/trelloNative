import { handleActions } from 'redux-actions';
import moment from 'moment';

let cards = handleActions(
  {
    ADD_CARD_TO_CARDS: (state, action) => ({
      ...state, 
      [action.payload.cardId]: { 
        columnId: action.payload.columnId,
        cardDescription: action.payload.cardDescription,
        comments: [],
        prayerIsAnswered: false,
        users: 0,
        timesPrayedTotal: 0,
        timesPrayedByMe: 0,
        timesPrayedByOthers: 0,
        prayerIsAnswered: false,
        dateAdding: moment().format('LL'),
        lastPrayed: moment().format()
      },
      
    }),
    DELETE_CARD_FROM_CARDS: (state, action) => {
      let copyOfState = { ...state };
      delete copyOfState[action.payload.cardId];
      return copyOfState;
    },
    CHANGE_STATUS_OF_CARD: (state, action) => {
      let copyOfState = { ...state };
      copyOfState[action.payload.cardId].prayerIsAnswered = !action.payload.cardStatus;
      return copyOfState;
    },
    TO_PRAY: (state, action) => {
      let copyOfState = { ...state };
      copyOfState[action.payload.cardId].timesPrayedByMe += 1;
      copyOfState[action.payload.cardId].lastPrayed = moment().format();
      return copyOfState;
    },
    ADD_COMMENT_TO_CARD: (state, action) => {
      let copyOfState = { ...state };
      copyOfState[action.payload.cardId].comments.push({id: action.payload.commentId});
      return copyOfState;
    },
    CHANGE_CARD_DESCRIPTION: (state, action) => {
      let copyOfState = { ...state };
      copyOfState[action.payload.cardId].cardDescription = action.payload.cardDescription;
      return copyOfState;
    }
  },
  {
    'c1': {
      columnId: 0,
      cardDescription: 'First prayerFirst prayer',
      comments: [{id: 'com1'}, {id: 'com2'}, {id: 'com3'}],
      users: 0,
      timesPrayedTotal: 0,
      timesPrayedByMe: 0,
      timesPrayedByOthers: 0,
      prayerIsAnswered: false,
      dateAdding: 'July 25 2017',
      lastPrayed: '20110212'
    },
    'c2': {
      columnId: 0,
      cardDescription: 'Second prayerFirst prayer',
      comments: [],
      users: 0,
      timesPrayedTotal: 0,
      timesPrayedByMe: 0,
      timesPrayedByOthers: 0,
      prayerIsAnswered: true,
      dateAdding: 'July 25 2017',
      lastPrayed: '20110212'
    }
  }
);

export default cards;
