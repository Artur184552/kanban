import React, { useState } from "react";
import TodoForm from "../todos/TodoForm";

function Ready() {

  const [readyTodos, setReadyTodos] = useState([])

  const [isButtonActive, setIsButtonActive] = useState(false)

  const addTask = (userInput) => {
    if(userInput) {
      const newReadyItem = {
        id: Math.random().toString(),
        task: userInput,
        complete: false
      }
      setReadyTodos([...readyTodos, newReadyItem])
    }
  }

    return(
        <div className='ready-main'>
        <p className='title ready-title'>Ready</p>

        <div className="item ready-todo-item">
          {/* select from backlogTodos */}
        </div>



        <div className={isButtonActive ? 'disabled' : 'main-button ready-button-change'}>
          <button className="button-style ready-button-change-item" onClick={() => setIsButtonActive(true)}>+Add card</button>
        </div>


        <div className={isButtonActive ? 'added-button ready-todo-input' : 'disabled'}>
          <TodoForm setIsButtonActive={setIsButtonActive} addTask={addTask} />
        </div>


        </div>
    )
}

export default Ready;