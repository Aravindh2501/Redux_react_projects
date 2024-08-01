import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addList, toggleChecked, deleteList } from '../../redux/slices/todoSlices/TodoSlice';

const TodoCreate = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const listData = useSelector((state) => state.todo.listData);

    const handleAdd = () => {
        if (input.trim()) {
            dispatch(addList(input));
            setInput("");
        }
    };

    const handleChecked = (id) => {
        dispatch(toggleChecked(id));
    };

    const handleDelete = (id) => {
        dispatch(deleteList(id));
    };

    return (
        <div className='todo'>
            <div className="card">
                <h2>Todo List</h2>
                <div className="add_todo">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button onClick={handleAdd}>Add List</button>
                </div>
                <div className="list_todo">
                    {listData.map((list) => (
                        <div key={list.id} className="todo_item">
                            <div className="todo_content">
                                <input
                                    type="checkbox"
                                    checked={list.isChecked || false}
                                    onChange={() => handleChecked(list.id)}
                                />
                                <p style={{ textDecoration: list.isChecked ? "line-through" : "", opacity: list.isChecked ? "0.5" : "1" }}>
                                    {list.name}
                                </p>
                            </div>
                            <button className="delete_btn" onClick={() => handleDelete(list.id)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TodoCreate;
