import { createSlice } from "@reduxjs/toolkit";

// slice == Action + reducer
// NoteSlice = NoteAction + NoteReducer

// RTK
//  Good : ลด overhead ในการเขึยน redux
// Action + Reducer => Slice
// No need to write Action type => ชื่อ slice / methodReducers
//  No need intergrate devtool , thunk (built in)
//  No need to write  ActionType ActionCreator
// No need combineReducer สามาารถติดตั้ง reducer หลายตัวได้ที่ configureStore
// Immer Library buitl in 
// Auto return 

// Bad
//

const initialState = {
  notes: [],
};

const noteSlice = createSlice({
  name: "note",
  initialState: initialState,
  reducers: {
    addNote: (state, action) => {
        // Immutable ไม่สามารถแก้ไข state เดิมได้ 
        // const newNotes = [...state,notes, action.payload] // This is immutable
      state.notes.push(action.payload); // mutable ถ้ารวม immer จะทำเปํ็น immutable
    //   return { notes: newNotes };

    // ที่คอมเม้นคือ code ปกติ / ที่ไม่ commnet คือหลังใช้ toolkit
     },
  },
});


// Auto Generate Action Creator ==> noteSlice.actions
export const { addNote } = noteSlice.actions;
// dispatch(addNote(notes))

// AutoGenerate NoteReducer ให่้ด้วย => ติดตั้งที่ store 
const noteReducer = noteSlice.reducer;
export default noteReducer;
