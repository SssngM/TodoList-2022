import React, { useState } from "react";

const EditInputForm = ({ id, updateItem, text, setShowEdit }) => {
  const [newText, setNewText] = useState(text);

  const handleSubmit = evt => {
    evt.preventDefault();
    updateItem(id, newText);
    setNewText();
    setShowEdit();
  };

  const handleChange = evt => {
    setNewText(evt.target.value);
  }

  return (
    <div className = "todoForm">
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        id="task"
        name="task"
        value={newText}
        onChange={handleChange}
      />
      
      <button>save</button>
    </form>
    </div>
  )
}

export default EditInputForm;
