import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToNotes, updateToNotes } from "../redux/notesSlice";

export const Home = () => {
    const [data, setData] = useState({
        title: '',
        content: ''
    });

    const [searchParams, setSearchParams] = useSearchParams();
    const noteId = searchParams.get("noteId");
    const dispatch = useDispatch();
    const notes = useSelector((state) => state.notes);

    useEffect(() => {
        if (noteId) {
            const note = notes.notes.find((n) => n._id === noteId);
            if (note) {
                setData({ title: note.title, content: note.content });
            }
        }
    }, [noteId, notes]);

    const createNote = (e) => {
        e.preventDefault();

        const note = {
            title: data.title,
            content: data.content,
            _id: noteId || Date.now().toString(36),
            createdAt: new Date().toISOString(),
        };

        if (noteId) {
            dispatch(updateToNotes(note));
        } else {
            dispatch(addToNotes(note));
        }

        setData({ title: "", content: "" });
        setSearchParams({});
    };

    return (
        <form onSubmit={createNote} className="w-[100%] h-100 bg-zinc-800 mt-5 p-10 text-white">
            <input className="rounded px-3 py-2 sm:w-[40vw] border-1 border-zinc-700 block"
                type="text"
                placeholder="enter title here"
                name="title"
                value={data.title}
                onChange={(e) => setData({ ...data, title: e.target.value })}
            />

            <textarea
                onChange={(e) => setData({ ...data, content: e.target.value })}
                className="border-1 px-3 py-2 rounded border-zinc-700 mt-5 h-50 w-[80vw] resize-none"
                name="content"
                value={data.content}
                placeholder="write content here"
            />

            <button type="submit"
                className="block mt-5 px-3 py-2 bg-blue-500 rounded">
                {noteId ? "Update Note" : "Create Note"}
            </button>
        </form>
    )
};