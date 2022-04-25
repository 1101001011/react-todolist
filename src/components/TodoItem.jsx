import React from "react"

const TodoItem = ({todo, remove}) => {
    return (
        <div 
            className="todo" key={todo.id} 
            style={ todo.color ? { backgroundColor: todo.color} : { border: '1px solid #ccc' }}>
                <h2>{todo.title}</h2>
                <div className="todo__buttons">
                    <div 
                        className="made__button"
                        onClick={() => remove(todo)}
                    >
                        <img
                            className="made__image"
                            src="https://img.icons8.com/glyph-neue/64/000000/checkmark.png" 
                            alt=''
                        />
                    </div>
                    <div 
                        className="delete__button"
                        onClick={() => remove(todo)}>
                        <img 
                            className="delete__image"
                            src="https://img.icons8.com/ios-glyphs/30/000000/delete-forever.png" 
                            alt=''
                        />
                    </div>
                </div>
        </div>
    )
}

export default TodoItem