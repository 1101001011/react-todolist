import MyButton from "./UI/button/MyButton"

const TodoItem = ({todo, remove}) => {
    return (
        <div className="todo" key={todo.id} style={{backgroundColor: todo.color}}>
                <h2>{todo.title}</h2>
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