import { useState } from "react";
import "./NoteForm.style.css";

const NoteForm = ({ addNote }) => {
  const [text, setText] = useState("");
  const [color, setColor] = useState("#BB2649"); // default color

  // function to add a new note
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return; // do nothing if note is empty

    // create a new note object
    const newNote = {
      id: Date.now(), // unique ID based current timestamp
      text: text,
      color: color,
      completed: false,
    };

    addNote(newNote); // call the addNote from parent function in the parent (App)
    setText("");
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your note here..."
      />
      <div className="color-picker">
        {["#BB2649", "#FF6F61", "#0F4C81", "#6667AB", "#88B04B"].map((col) => (
          <span
            key={col}
            style={{ backgroundColor: col }}
            className={color === col ? "selected" : ""}
            onClick={() => setColor(col)}
          >
            {" "}
            <span className="checkmark">✓</span>
          </span>
        ))}
        <button type="submit">ADD</button>
      </div>
    </form>
  );
};

export default NoteForm;
