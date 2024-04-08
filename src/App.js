import NotesList from "./components/NotesList";
import { useState } from "react";
import Searchbar from "./components/Searchbar";
import AppHeader from "./components/AppHeader";



function App() {

  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Note 1',
      text: 'This is my first note!',
      date: '25/03/2024',
    },
    {
      id: 2,
      title: 'Note 2',
      text: 'This is my second note!',
      date: '27/03/2024',
    },
    {
      id: 3,
      title: 'Note 3',
      text: 'This is my third note!',
      date: '28/03/2024',
    },
    {
      id: 4,
      title: 'Note 4',
      text: 'This is my new note!',
      date: '30/04/2021',
    },
  ]);

  const [keyword, setKeyword] = useState('');

  const [darkTheme, setdarkTheme] = useState(false);

  const addNote = (title, text) => {
		const date = new Date();
		const newNote = {
			id: Math.random(),
      title: title,
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

  const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

  return (
    <div className= {`${darkTheme && "dark-theme"}`}>
        <div className="App">
          
          <AppHeader 
          handleChangeTheme={setdarkTheme}
          />
          <Searchbar 
          handleSearch={setKeyword} 
          />
        
          <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(keyword)
            )}
          addNewNote={addNote}
          handleDelete={deleteNote}
          />
        </div>
    </div>
   
  );
}

export default App;
