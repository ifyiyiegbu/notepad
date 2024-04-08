import React, { useState } from 'react'



function AddNote({ addNewNote }) {

    const [heading, setHeading] = useState('');
    const [noteText, setNoteText] = useState('');
	const characterLimit = 200;

    const addTitle = (e) => {
        setHeading(e.target.value)
    }

	const handleChange = (e) => {
		if (characterLimit - e.target.value.length >= 0) {
			setNoteText(e.target.value);
		}
	};

    const handleAdd = () => {
		if (noteText.trim().length > 0) {
			addNewNote(heading,noteText);
            setHeading('');
			setNoteText('');
		}
	};

	
  return (
    <div className='notepad new'>
        <textarea 
            rows= '1'
            cols= '10'
            placeholder='Title...'
            value={heading}
            onChange={addTitle}
        >
        </textarea>
        <textarea
				rows='8'
				cols='10'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleChange}
        >
        </textarea>
		<div className='note-footer'>
			<small>
                {characterLimit - noteText.length} Remaining
			</small>
			<button className='add-button' onClick={handleAdd}>
					Add
			</button>
		</div>
    </div>
  )
}

export default AddNote
