import React from 'react'
import Notepad from './Notepad'
import AddNote from './AddNote'

function NotesList({notes, addNewNote, handleDelete}) {
  return (
    <div className='notes-list'>
        {notes.map((note)=>(
            <Notepad 
            id={note.id}
            title={note.title}
            text={note.text}
            date={note.date}
            handleDelete={handleDelete}
             />
        )   ) }

        <AddNote
        addNewNote={addNewNote}
        />
      
    </div>
  )
}

export default NotesList
