import React, { useState } from "react";

const NewTodoForm = ({ createTodo} , props ) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    if (todo.length >= 1) {
      createTodo(todo);
      setTodo('');
    }
  };

  const handleChange = evt => {
    setTodo(evt.target.value);
  }

  // const isValid = () => {
  //   if (todo.length >= 1) {
  //     return <p>all set!</p>
  //   } else {
  //     return <p>todo must be 1 characer</p>
  //   }
  // }

  return (
    <div className = 'todoForm'>
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">   TO DO : </label>
      <input  
        type="text"
        id="task"
        name="task"
        value={todo}
        onChange={handleChange}
      />
      <button >Add</button>
      {/* {isValid()} */}
      
    </form>
    </div>
  )
}

export default NewTodoForm;
