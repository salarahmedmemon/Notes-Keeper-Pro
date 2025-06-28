import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const ViewNote = () => {
    const { id } = useParams();
    const notes = useSelector((state) => state.notes.notes);
    const note = notes.find((n) => n._id === id);

    if (!note) {
        return (
            <div className="w-full h-[85vh] mt-5 bg-zinc-900 text-white p-10 text-xl">
                <h1 className="text-4xl">Note not found.</h1>
            </div>
        );
    }

    return (
        <div className="w-full h-[85vh] mt-5 bg-zinc-900 text-white p-10 text-xl">
            <h1 className="text-4xl">Note ID: {id}</h1>
            <h2 className="mt-5"><span className="text-2xl me-27">Title:</span> {note.title}</h2>
            <p className="mt-3"><span className="text-2xl me-8">Description:</span> {note.content}</p>
        </div>
    );
};