import React, { useState } from "react";
import TodoForm from "../todos/TodoForm";

function Progress() {

  const [progressTodos, setProgressTodos] = useState([])

  const [isButtonActive, setIsButtonActive] = useState(false)

  const addTask = (userInput) => {
    if(userInput) {
      const newProgressItem = {
        id: Math.random().toString(),
        task: userInput,
        complete: false
      }
      setProgressTodos([...progressTodos, newProgressItem])
    }
  }

    return(
        <div className='progress-main'>
        <p className='title progress-title'>In Progress</p>


        <div className="item progress-todo-item">
          {/* select from readyTodos */}
        </div>



        <div className={isButtonActive ? 'disabled' : 'main-button progress-button-change'}>
          <button className="button-style progress-button-change-item" onClick={() => setIsButtonActive(true)}>+Add card</button>
        </div>


        <div className={isButtonActive ? 'added-button progress-todo-input' : 'disabled'}>
          <TodoForm setIsButtonActive={setIsButtonActive} addTask={addTask} />
        </div>


      </div>
    )
}

export default Progress;