import { MdDeleteForever } from 'react-icons/md'
export default function Note({ id, title, text, date, handleDeleteNote }){
    return(
        <div className="note">
            <div className="note--content">
            <h2>{title}</h2>
            <hr />
            <p>{text}</p>
            </div>
            <div className="note--footer">
            <small>{date}</small>
            <MdDeleteForever id='delete-icon'
            onClick={() => handleDeleteNote(id)}
            size='1.3em'/>
            </div>
        </div>
    )
}