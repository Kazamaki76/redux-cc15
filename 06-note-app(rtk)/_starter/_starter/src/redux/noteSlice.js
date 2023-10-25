import { createSlice} from "@reduxjs/toolkit"

// slice == Action + reducer 
// NoteSlice = NoteAction + NoteReducer 

const initialState = {
    notes: [] , 
};

const noteSlice = createSlice({
    name: "note",
    initialState: initialState,
    reducers: {
        addNote :(state, actions)=> {
            const newNotes = [ ...state.notes ,actions.payload];
            return{notes : newNotes};
        }
    }
})

// Auto Generate Action Creator ==> noteSlice.actions
export const {addNote} = noteSlice.actions;
// dispatch(addNote(notes))

// AutoGenerate NoteReducer ให่้ด้วย 
const noteReducer = noteSlice.reducer;
export default noteReducer;