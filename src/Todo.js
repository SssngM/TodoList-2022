import React, { useState } from "react";
import EditInputForm from './EditInputForm';

function Todo({ todo, deleteItem, updateItem }){ ;
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteItem = () => {
    deleteItem(todo.id);
  }

  const toggleShowEdit = () => {
    setShowEdit(showEdit => !showEdit)
  }


  let result 
  if (showEdit) { 
    result = (
      <div clasName = 'todo'>
        <EditInputForm 
                  id={todo.id}
                  text={todo.text}
                  setShowEdit={setShowEdit}
                  updateItem={updateItem} />
      </div>
    )
  } else {
    result = (
      <div className = "todoButtons">
        { todo.text }
        <button onClick={toggleShowEdit}><i class="fas fa-pen"></i></button>
        <button onClick={handleDeleteItem}> <i class="fas fa-trash"></i> </button>
      </div>
    )
   }
  return result;
}

export default Todo;
