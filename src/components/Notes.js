import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromNotes } from "../redux/notesSlice";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";

export const Notes = () => {
    const notes = useSelector((state) => state.notes);
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();

    const filterData = notes.notes.filter((note) =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDeleteFromNotes = (noteId) => {
        if (window.confirm('Are you sure you want to delete this note?')) {
            dispatch(deleteFromNotes(noteId));
        }
    };

    return (
        <div className="w-full min-h-[85vh] bg-zinc-800 mt-5 text-white p-4 md:p-8">
            <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search here"
                className="w-full px-3 py-2 rounded border border-zinc-700 mb-4 bg-zinc-900 text-white placeholder-zinc-400"
            />

            <h1 className="text-2xl font-semibold mb-4">ALL NOTES</h1>

            <div className="notes grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filterData.length > 0 ? (
                    filterData.map((note) => (
                        <div
                            key={note._id}
                            className="note w-full border border-zinc-700 p-5 rounded-lg bg-zinc-900 hover:shadow-lg transition duration-300"
                        >
                            <div className="flex items-center justify-between">
                                <h1 className="text-xl font-bold break-words">{note.title}</h1>
                                <div className="icons flex gap-3 text-lg cursor-pointer">
                                    <span>
                                        <NavLink to={`/?noteId=${note._id}`}><i className="fa-solid fa-pen-to-square"></i></NavLink>
                                    </span>
                                    <span onClick={() => handleDeleteFromNotes(note._id)}><i className="fa-solid fa-trash"></i></span>
                                    <span>
                                        <NavLink to={`/notes/${note._id}`}><i className="fa-solid fa-eye"></i></NavLink>
                                    </span>
                                    <span onClick={() => {
                                        navigator.clipboard.writeText(note.content);
                                        toast.success("Copied to clipboard");
                                    }}><i className="fa-solid fa-copy"></i></span>
                                </div>
                            </div>

                            <p className="mt-4 break-words">{note.content}</p>

                            <p className="mt-4 flex items-center gap-2 text-sm text-zinc-400">
                                <i className="fa-solid fa-calendar-days"></i>
                                {note.createdAt.split("T")[0]}
                            </p>
                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-full text-zinc-400">No notes found!</p>
                )}
            </div>
        </div>
    );
};