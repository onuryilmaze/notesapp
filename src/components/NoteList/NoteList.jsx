import React from 'react'
import Note from '../Note'
import './NoteList.style.css'


const NoteList = ({notes, toogleComplete, deleteNote}) => {
  return (
    <div className='note-list'>

        {notes.map((note) => (
            <Note
                key={note.id}
                note={note}
                toogleComplete={toogleComplete}
                deleteNote={deleteNote}
            />
        ))}
    </div>
  )
}

export default NoteList