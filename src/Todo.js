import React, { useState } from "react";
import EditInputForm from './EditInputForm';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {AiFillEdit,AiFillDelete} from "react-icons/ai";


function Todo({ todo, deleteItem, updateItem }) {
  ;
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
      <div clasName='todo'>

        <EditInputForm
          id={todo.id}
          text={todo.text}
          setShowEdit={setShowEdit}
          updateItem={updateItem} />
      </div>
    )
  } else {
    result = (
      <div className="todoButtons">
        <p className="todotext"> {todo.text}   </p>
        <div className=" buttonDiv" >
        <button onClick={toggleShowEdit}> <AiFillEdit/></button> 
        <button onClick={handleDeleteItem}><AiFillDelete/> </button>
        </div>
      </div>
    )
  }
  return result;
}

export default Todo;
