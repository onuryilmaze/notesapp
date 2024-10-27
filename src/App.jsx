import { useEffect, useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState("");

  //load saves notes from localstorage on page load
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  // function to add a new note
  const addNote = (note) => {
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes, note];
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      return updatedNotes;
    });
  };

  // function to delete a note with confirm/alert
  const deleteNote = (id) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      setNotes((prevNotes) => {
        const updatedNotes = prevNotes.filter((note) => note.id !== id);
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
        return updatedNotes;
      });
    }
  };

  // function toggle the completion status of a note
  const toggleComplete = (id) => {
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.map((note) =>
        note.id === id ? { ...note, completed: !note.completed } : note
      );
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      return updatedNotes;
    });
  };

  return (
    <div className="app">
      <h1>NotesApp</h1>
      <input
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <NoteForm addNote={addNote} />
      <NoteList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(filter.toLowerCase())
        )}
        toogleComplete={toggleComplete}
        deleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
