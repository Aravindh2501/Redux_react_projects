import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes: [],
};

const noteSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNote: (state, action) => {
            const newNote = {
                id: state.notes.length > 0 ? state.notes[state.notes.length - 1].id + 1 : 1,
                name: action.payload,
            };
            state.notes.push(newNote);
        },
        removeNote: (state, action) => {
            state.notes = state.notes.filter(note => note.id !== action.payload);
        },
        editNotes: (state, action) => {
            const { id, name } = action.payload;
            const note = state.notes.find(note => note.id === id);
            if (note) {
                note.name = name;
            }
        },
    },
});

export const { addNote, removeNote, editNotes } = noteSlice.actions;
export default noteSlice.reducer;
