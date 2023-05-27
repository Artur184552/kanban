import React, { useState } from "react";
import Todo from "../todos/Todo";
import TodoForm from "../todos/TodoForm";

function Backlog() {


    const [backlogTodos, setBacklogTodos] = useState([])

    const [isButtonActive, setIsButtonActive] = useState(false)
  
    const addTask = (userInput) => {
      if(userInput) {
        const newBacklogItem = {
          id: Math.random().toString(),
          task: userInput,
          complete: false
        }
        setBacklogTodos([...backlogTodos, newBacklogItem])
      }
    }
  
    const removeTask = (id) => {
      setBacklogTodos([...backlogTodos.filter((todo) => todo.id !== id)])
    }


    return(
        <div className='backlog-main'>
        <p className='title backlog-title'>Backlog</p>

        <div className='item backlog-todo-item'>

           {backlogTodos.map((todo) => {
       return (
         <Todo
           todo={todo}
           key={todo.id}
           removeTask={removeTask}
           />
       )
     })}


        <div className={isButtonActive ? 'disabled' : 'main-button backlog-button-change'}>
          <button className="button-style backlog-button-change-item" onClick={() => setIsButtonActive(true)}>+Add card</button>
        </div>


        <div className={isButtonActive ? 'added-button backlog-todo-input' : 'disabled'}>
          <TodoForm setIsButtonActive={setIsButtonActive} addTask={addTask} />
        </div>


        </div>

      </div>
    )
}

export default Backlog;