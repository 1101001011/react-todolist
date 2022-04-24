import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import './styles/App.css'

function App() {
    const [todos, setTodos] = useState([])

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo])
    }

    const removeTodo = (todo) => {
        setTodos(todos.filter(t => t.id !== todo.id))
    }

    return (
        <div className="App">
            <TodoForm addTodo={addTodo}/>
            <TodoList remove={removeTodo} todos={todos}/>
        </div>
    );
}

export default App;
