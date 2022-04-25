import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useGetFromLS } from "./hooks/useGetFromLS";
import { useRemoveFromLS } from "./hooks/useRemoveFromLS";
import './styles/App.css'

function App() {
    const [todos, setTodos] = useState(useGetFromLS())

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo])
    }

    const RemoveTodo = (todo) => {
        setTodos(todos.filter(t => t.id !== todo.id))
        useRemoveFromLS(todo)
    }

    return (
        <div className="App">
            <TodoForm addTodo={addTodo}/>
            <TodoList 
                remove={RemoveTodo} 
                todos={todos}
            />
        </div>
    );
}

export default App;
