import React, {useState} from 'react'

const TodoList = ({todos}) => {
    const [todo, setTodo] = useState(todos)
    return (
        <div>
            TODOS: <br></br>
            { todo.map(item => (
                <div key={item.id}> 
                Id: {item.id} |  Title : {item.title}
                </div>
            ))}
            
        </div>
    )
}

export default TodoList
cd 