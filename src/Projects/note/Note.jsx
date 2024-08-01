import React, { useState } from 'react';
import { addNote, removeNote, editNotes } from '../../redux/slices/noteSlices/NoteSlices';
import { useDispatch, useSelector } from 'react-redux';

const Note = () => {
    const [input, setInput] = useState("");
    const [message, setMessage] = useState("");
    const [editId, setEditId] = useState(null);
    const [editInput, setEditInput] = useState("");
    const dispatch = useDispatch();
    const notes = useSelector((state) => state.note.notes);

    const handleAdd = () => {
        if (input.trim()) {
            dispatch(addNote(input));
            setMessage("Note added successfully!");
            setInput("");

            setTimeout(() => {
                setMessage("");
            }, 2000);
        }
    };

    const handleEdit = (id, name) => {
        setEditId(id);
        setEditInput(name);
    };

    const handleUpdate = () => {
        if (editInput.trim()) {
            dispatch(editNotes({ id: editId, name: editInput }));
            setMessage("Note updated successfully!");
            setEditId(null);
            setEditInput("");

            setTimeout(() => {
                setMessage("");
            }, 2000);
        }
    };

    const handleDelete = (id) => {
        dispatch(removeNote(id));
        setMessage("Note deleted successfully!");
        setTimeout(() => {
            setMessage("");
        }, 2000);
    };

    return (
        <div className='note'>
            <div className="card">
                {message && (
                    <p className="message">{message}</p>
                )}
                <div className="note_top">
                    <input
                        type="text"
                        placeholder="Add a note..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button onClick={handleAdd}>
                        Add Note
                    </button>
                </div>
                <div className="note_content">
                    {notes.map((note) => (
                        <div key={note.id} className="note_item">
                            {editId === note.id ? (
                                <>
                                    <input
                                        type="text"
                                        value={editInput}
                                        onChange={(e) => setEditInput(e.target.value)}
                                    />
                                    <button onClick={handleUpdate}>Update</button>
                                </>
                            ) : (
                                <p>{note.name}</p>
                            )}
                            <div className="btns">
                                <button className="edit" onClick={() => handleEdit(note.id, note.name)}>Edit</button>
                                <button className="delete" onClick={() => handleDelete(note.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Note;
