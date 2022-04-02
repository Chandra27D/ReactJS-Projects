import { useState, useEffect } from 'react'
import NotesList from './components/NotesList'
import { nanoid } from 'nanoid'
import Search from './components/Search';
import Header from './components/Header';
function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "Test Note",
      text: "This is the first note",
      date: '27/12/2021'
    },
  ])
  const [searchNote, setSearchNote] = useState('')
  const [darkMode, setDarkMode] = useState(true)
  
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    if(savedNotes){
      setNotes(savedNotes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  
  }, [notes])
  

  function addNote(title, text){
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: title,
      text: text,
      date: date.toLocaleDateString()
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  function deleteNote(id) {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
          <Header handleDarkMode={setDarkMode}/>
          <Search handleSearch = {setSearchNote}/>  
          <NotesList 
          notes={notes.filter((note) => {
            return(
              note.title.toLowerCase().includes(searchNote) ||
              note.text.toLowerCase().includes(searchNote)
            )
          }) }
          handleAddNote = {addNote}
          handleDeleteNote = {deleteNote}/>   
      </div>
    </div>
    
  );
}

export default App;
