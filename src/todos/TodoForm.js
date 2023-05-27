import React, { useState } from 'react'

function TodoForm({ addTask, setIsButtonActive }) {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
        if(userInput) {
            setIsButtonActive(false)
        }
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            handleSubmit(e)
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                className='add-task-input'
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder='Add task...'
            />        
            <button className='add-task-button'>Submit</button>
        </form>
    )
}

export default TodoForm;