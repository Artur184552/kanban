import React from 'react'

function Todo({ todo, removeTask }) {
    return (
        <div key={todo.id} className="backlog-task">

            <div className='item-backlog-todo'>
                {todo.task}
            </div>

            <div className='remove backlog-remove' onClick={() => removeTask(todo.id)}>
            &#10008;
            </div>

        </div>
    )
}

export default Todo;