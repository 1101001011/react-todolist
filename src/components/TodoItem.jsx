import MyButton from "./UI/button/MyButton"

const TodoItem = ({todo, remove}) => {
    return (
        <div className="todo" key={todo.id}>
                <h2>{todo.title} {todo.category}</h2>
                <div className="todo__buttons">
                    <MyButton btnType="add">Made</MyButton>
                    <MyButton 

                        btnType="delete"
                        onClick={() => remove(todo)}
                    >
                        Delete
                    </MyButton>
                </div>
        </div>
    )
}

export default TodoItem