import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from '../actions/actionType';
/**
 * note : {id:string, title : string, content: string}
 */

const initialState = {
  notes: [],
};

// Reducer == Fn 2 Parameter
const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      
      const newNotes= [...state.notes, action.payload]

      return { ...state, notes: [...state.notes, action.payload] };
    case DELETE_NOTE:
      return { ...state, notes: state.notes.filter((n) => n.id !== action.payload) };
    default:
      return state;
  }
};

export default noteReducer;