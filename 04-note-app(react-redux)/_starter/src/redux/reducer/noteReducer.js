import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from "../actions/actionType";
/* 
note : { id: string , title: string , content: string}
*/

const initialState = {
  notes: [],
};

//  Reducer == FN 2 Parameter const
const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return { ...state, notes: [action.payload, ...state.notes] };
    case DELETE_NOTE:
      return {
        ...state,
        note: state.notes.filter((n) => n.id !== action.payload),
      };
    default:
      return state;
  }
};

export default noteReducer
