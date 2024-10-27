import React from "react";
import "./Note.style.css";

const Note = ({ note, toogleComplete, deleteNote }) => {
  return (
    <div
      className={`note ${note.completed ? "completed" : ""}`} // add completed class if notes completed. :/
      style={{ backgroundColor: note.completed ? "#d3d3d3" : note.color }}
    >
      <span onClick={() => toogleComplete(note.id)}>{note.text}</span>
      <button className="delete-btn" onClick={() => deleteNote(note.id)}>x</button>
    </div>
  );
};

export default Note;
