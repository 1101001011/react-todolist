import { useEffect, useState } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { useTodoCategory } from "../hooks/useTodoCategory"
import MyButton from "./UI/button/MyButton"
import MyInput from "./UI/input/MyInput"
import MySelect from "./UI/select/MySelect"

const TodoForm = ({addTodo}) => {
    const [todo, setTodo] = useState({ title: '', category: '', color: '' })
    const [defaultValue, setDefaultValue] = useState("Categories")
    const [active, setActive] = useState(false)
    const [validForm, setValidForm] = useState(false)

    useEffect(() => {
        if(!todo.title) setValidForm(false)
        else setValidForm(true)
    }, [todo])

    const AddTodoHandler = (e) => {
        e.preventDefault()
        const newTodo = {
            ...todo, title: todo.title.trim(), id: Date.now()        
        }
        addTodo(newTodo)
        useLocalStorage(newTodo)
        setTodo({title: '', category: '', color: ''})
        setDefaultValue("Categories")
        setActive(false)
    }

    const CreateCategory = (category) => {
        useTodoCategory(category, todo, setTodo)
    }

    return (
        <form className="todo__form">
            <MyInput
                value={todo.title}
                type="text"
                placeholder="Your todo.."
                onChange={(e) => setTodo({...todo, title: e.target.value})}
                onClick={() => setActive(false)}
            />
            <MySelect 
                createCategory={CreateCategory}
                defaultValue={defaultValue} setDefaultValue={setDefaultValue}
                active={active} setActive={setActive}/>
            <MyButton disabled={!validForm} onClick={(e) => AddTodoHandler(e)}>
                Add
            </MyButton>
        </form>
    )
}

export default TodoForm