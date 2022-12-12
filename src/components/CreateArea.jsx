import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isExpand, setExpand] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((preNote) => {
      return {
        ...preNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    setExpand((p) => !p);
    event.preventDefault();
  }

  function expand() {
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpand && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            autoComplete="off"
            value={note.title}
          />
        )}
        <textarea
          onClick={expand}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpand ? 3 : 1}
          value={note.content}
        />
        {isExpand && (
          <div className="buttons">
            <button onClick={() => setExpand((p) => !p)}>Close</button>
            <button onClick={submitNote}>Add</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
