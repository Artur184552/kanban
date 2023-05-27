import React, { useState } from "react";
import TodoForm from "../todos/TodoForm";

function Finished() {

  const [finishedTodos, setFinishedTodos] = useState([])

  const [isButtonActive, setIsButtonActive] = useState(false)

  const addTask = (userInput) => {
    if(userInput) {
      const newFinishedItem = {
        id: Math.random().toString(),
        task: userInput,
        complete: false
      }
      setFinishedTodos([...finishedTodos, newFinishedItem])
    }
  }

    return(
        <div className='finished-main'>
        <p className='title finished-title'>Finished</p>

        <div className="item progress-todo-item">
          {/* select from progressTodos */}
        </div>



        <div className={isButtonActive ? 'disabled' : 'main-button finished-button-change'}>
          <button className="button-style finished-button-change-item" onClick={() => setIsButtonActive(true)}>+Add card</button>
        </div>


        <div className={isButtonActive ? 'added-button finished-todo-input' : 'disabled'}>
          <TodoForm setIsButtonActive={setIsButtonActive} addTask={addTask} />
        </div>
      </div>
    )
}

export default Finished;