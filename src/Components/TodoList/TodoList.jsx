import React from 'react';
import './TodoList.css'
import Detective from '../../assets/img/Empty.svg'
import editBtn from '../../assets/img/edit_Btn.svg'
import trashBtn from '../../assets/img/trash_Btn.svg'
import saveBtn from '../../assets/img/save_Btn.svg'

function TodoList({ notes, handleToggleComplete, handleEdit, handleSaveEdit, handleDelete, editId, editText, setEditText, error }) {

  
    return (
      <div className="todo-list">
            <div className="todo-items">
                {notes.length === 0 ? (
                    <div className="empty-message">
                        <img src={Detective} alt="Detective" />
                        <p>Empty...</p>
                    </div>
                ) : (
                    notes.map(note => (
                        <div key={note.id} className="note">
                            <input
                                type="checkbox"
                                checked={note.completed}
                                id={`checkbox-${note.id}`}
                                onChange={() => handleToggleComplete(note.id)}
                            />
                            <label className="custom-checkbox" htmlFor={`checkbox-${note.id}`}></label>
                            <div className='note-content'>
                            {editId === note.id ? (
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                />
                            ) : (
                                <span className={note.completed ? 'completed' : ''}>{note.text}</span>
                            )}
                            </div>
                            <div className='btns'>
                            {editId === note.id ? (
                                <button onClick={() => handleSaveEdit(note.id)}>
                                    <img src={saveBtn} alt="" />
                                </button>
                            ) : (
                                <button  onClick={() => handleEdit(note.id, note.text)}><img src={editBtn} alt="edit button"></img></button>
                            )}
                            <button  onClick={() => handleDelete(note.id)}><img src={trashBtn} alt="trash button"></img></button>
                            </div>
                        </div>
                    ))
                )}
                {error && <div className="error">{error}</div>}
            </div>
        </div>
    );
}


export default TodoList