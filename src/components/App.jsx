import React, { useEffect, useState } from "react";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";
import api from "../api";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getAllNotes = async () => {
      const res = await api.get("/lists");
      setNotes(res.data);
    };

    getAllNotes();
  }, []);

  async function addNote(note) {
    try {
      const res = await api.post("/lists/add", { ...note });
      setNotes(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteNote(id) {
    try {
      const res = await api.delete(`/lists/${id}`);
      setNotes(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      <div className="notes">
        {notes.map((noteItem) => {
          return (
            <Note
              key={noteItem._id}
              id={noteItem._id}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
