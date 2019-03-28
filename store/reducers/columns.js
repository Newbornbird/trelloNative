import { handleActions } from 'redux-actions';

let columns = handleActions(
  {
    ADD_COLUMN: (state, action) => {
      let copyOfState = [ ...state ];
      copyOfState.push({ 
        columnName: 'One more column', 
        id: String(state.length),
        cards: [],
        answeredCards: []

      })
      return copyOfState;
    },
    ADD_CARD_TO_COLUMNS: (state, action) => {
      let copyOfState = [ ...state ];
      copyOfState[action.payload.columnId].cards.push(
        {
          id: action.payload.cardId,
        }
      )
      return copyOfState
    },
    DELETE_CARD_FROM_COLUMN: (state, action) => {
      let copyOfState = [ ...state ];
      let index = copyOfState[action.payload.columnId].cards.findIndex(
        (item) => item.id === action.payload.cardId
      );
      copyOfState[action.payload.columnId].cards.splice(index, 1)
      return copyOfState;
    },
    DELETE_ANSWERED_CARD_FROM_COLUMN: (state, action) => {
      let copyOfState = [ ...state ];
      let index = copyOfState[action.payload.columnId].answeredCards.findIndex(
        (item) => item.id === action.payload.cardId
      );
      copyOfState[action.payload.columnId].answeredCards.splice(index, 1)
      return copyOfState;
    },
    'REPLACE_CARD_TO_ANSWERED_CARD_ARRAY': (state, action) => {
      let copyOfState = [ ...state ];
      let index = copyOfState[action.payload.columnId].cards.findIndex(
        (item) => item.id === action.payload.cardId
      );
      let replacedCard = copyOfState[action.payload.columnId].cards.splice(index, 1);
      copyOfState[action.payload.columnId].answeredCards.push(replacedCard[0]);
      return copyOfState;
    },
    'REPLACE_CARD_TO_CARD_ARRAY': (state, action) => {
      let copyOfState = [ ...state ];
      let index = copyOfState[action.payload.columnId].answeredCards.findIndex(
        (item) => item.id === action.payload.cardId
      );
      let replacedCard = copyOfState[action.payload.columnId].answeredCards.splice(index, 1);
      copyOfState[action.payload.columnId].cards.push(replacedCard[0]);
      return copyOfState;
    }
  },
  [
    { columnName: 'To do', id: '0', cards: [ {id: 'c1'} ], answeredCards: [ {id: 'c2'} ] },
    { columnName: 'In progress', id: '1', cards: [], answeredCards: [] },
    { columnName: 'Completed', id: '2', cards: [], answeredCards: [] }
  ]
);

export default columns;
