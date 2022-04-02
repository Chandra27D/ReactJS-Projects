import { useState } from "react"
export default function AddNote({ handleAddNote }) {
    const [noteText, setNoteText] = useState('')
    const [noteTitle, setNoteTitle] = useState('')
    const characterLimit = 250;
    function handleChangeText(event){
        if(characterLimit - event.target.value.length >= 0){
            setNoteText(event.target.value);
        }
    }
    function handleTitleChange(event){
        setNoteTitle(event.target.value);
    }
    function handleSaveNote(){
        if(noteTitle.trim().length > 0 && noteText.trim().length > 0){
            handleAddNote(noteTitle, noteText)
            setNoteTitle('');
            setNoteText('');
        }
    }
    return(
        <div className="note new">
            <input
            onChange={handleTitleChange}  
            placeholder="Title here..."
            value={noteTitle}>
            </input>
            <hr />
            <textarea 
            cols="8" 
            rows="10" 
            onChange={handleChangeText}
            placeholder="Add your notes here..."
            value={noteText}>
            </textarea>
            <div className="note--footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className="save" onClick={handleSaveNote}>Save</button>
            </div>
        </div>
    )
};
