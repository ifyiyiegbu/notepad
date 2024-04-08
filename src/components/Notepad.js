import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

function Notepad({id, title, text, date, handleDelete}) {
  return (
    <div className='notepad'>
      
        <header className='note-title'>
            <h5>{title}</h5>
        </header>
        <section className='note-content'>
            <p>{text}</p> 
        </section>
        <footer className='note-footer'>
            <small>{date}</small>
            <FaTrashAlt type= 'button' className='delete-button' onClick={() => handleDelete(id)} />
        </footer>


    </div>
  )
}

export default Notepad
