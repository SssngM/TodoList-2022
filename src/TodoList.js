import React, { useState } from "react"; 
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import "./TodoList.css";
import uuid from 'uuid/v4';
import LoginForms from  "./LoginForms"

function TodoList(){
    const [todos, setTodos] = useState([]); 
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState('')

    const createTodo = todoStr => {
      setTodos(todos => [...todos, {id: uuid(), text: todoStr}]);
    };

    const deleteItem = id => {
      const newItems = todos.filter(todo => todo.id !== id);
      setTodos(newItems);
    }

    const updateItem = (id, newText) => {
      const newItems = todos.map(todo => {
        if (todo.id === id) {
          const todoCopy = {...todo}
          todoCopy.text = newText;
          return todoCopy;
        } else {
          return todo;
        }
      });
      setTodos(newItems);
    }
 
    const renderTodos = () => {
      return (
        <ul  className = 'todo'>
          {todos.map((todo) => (
            <Todo 
              key={todo.id}
              updateItem={updateItem}
              deleteItem={deleteItem}
              todo={todo} />
          ))}
        </ul>
      );
    };

    function renderLoggedIn () {
      if (isLoggedIn === false) {
        return (
          <div>
            <LoginForms 
            setIsLoggedIn ={setIsLoggedIn} 
            setUser={setUser}
            />
            
          </div>
        )
      } else {
        return (
          <div>
             <div className = 'TodoList'>
             <h1 className ='Title'> {user}'s TodoList</h1>
             <NewTodoForm 
             createTodo={createTodo} 
             user={user}
             />
             {renderTodos()}
             </div>
          </div>
        )
      }
    }

    return (
      <div>
        {renderLoggedIn()}
      </div>
     
    );
};


export default TodoList;
