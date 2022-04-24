import { CSSTransition } from "react-transition-group"
import { TransitionGroup } from "react-transition-group"
import TodoItem from "./TodoItem"

const TodoList = ({remove, todos}) => {
    if (!todos.length) {
        return <h1 style={{textAlign: 'center', color: 'white'}}>No todos</h1>
    }

    return (
        <div>
            <TransitionGroup>
                {todos.map(todo =>
                    <CSSTransition 
                        timeout={200} 
                        classNames="todo"
                        key={todo.id}>
                        <TodoItem todo={todo} remove={remove}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
}

export default TodoList