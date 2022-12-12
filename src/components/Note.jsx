import React from "react";
import { Delete } from "@mui/icons-material";

function Note(props) {
  return (
    <div className="note">
      <h1 className="h1">{props.title}</h1>
      <p className="p">{props.content}</p>
      <div className="btn__delete">
        <button
          onClick={() => {
            props.onDelete(props.id);
          }}
        >
          <Delete />
        </button>
      </div>
    </div>
  );
}

export default Note;
