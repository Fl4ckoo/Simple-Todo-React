import React, {useState} from 'react'
import './PopUpAdd.css'






function PopUpAdd({show, onClose, onAddTodo}) {
   
    const [note, setNote] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        onAddTodo({
            id: Date.now(),
            text: note,
            completed: false,
        });
        setNote('');
        onClose();
    };
   
    
    
    if (!show) {
        return null;
    }

    


  

  

    return (
        <div className="popup">
                <div className="popup-content">
                    <h2>NEW NOTE</h2>
                    <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Input your note..."
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        required
                    />
                        <div className="buttons">
                            <button type="button" className="cancel" onClick={onClose}>Cancel</button>
                            <button type="submit" className="apply">Apply</button>
                        </div>
                    </form>
                </div>
            </div>
  )
}

export default PopUpAdd