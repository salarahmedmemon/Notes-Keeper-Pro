import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const STORAGE_KEY = "notes";

const initialState = {
    notes: localStorage.getItem(STORAGE_KEY) ? JSON.parse(localStorage.getItem(STORAGE_KEY)) : []
};

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addToNotes: (state, action) => {
            const note = action.payload;
            state.notes.push(note);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state.notes));
            toast.success("Note Created Successfully.");
        },
        updateToNotes: (state, action) => {
            const note = action.payload;
            const index = state.notes.findIndex((item) => item._id === note._id);

            if (index >= 0) {
                state.notes[index] = note;
                localStorage.setItem(STORAGE_KEY, JSON.stringify(state.notes));
                toast.success("Note Updated.");
            }
        },
        deleteFromNotes: (state, action) => {
            const noteId = action.payload;
            const index = state.notes.findIndex((item) => item._id === noteId);

            if (index >= 0) {
                state.notes.splice(index, 1);
                localStorage.setItem(STORAGE_KEY, JSON.stringify(state.notes));
                toast.success("Note Deleted.");
            }
        },
        deleteAllNotes: (state) => {
            state.notes = [];
            localStorage.removeItem(STORAGE_KEY);
            toast.success("All Notes Deleted.");
        },
    },
});

export const { addToNotes, updateToNotes, deleteFromNotes, deleteAllNotes } = notesSlice.actions;

export default notesSlice.reducer;