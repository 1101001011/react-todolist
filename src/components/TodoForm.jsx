import { useState } from "react"
import MyButton from "./UI/button/MyButton"
import MyInput from "./UI/input/MyInput"
import MySelect from "./UI/select/MySelect"

const TodoForm = ({addTodo}) => {
    const [todo, setTodo] = useState({ title: '', category: '' })
    const [defaultValue, setDefaultValue] = useState("Без категории")

    const addTodoHandler = (e) => {
        e.preventDefault()
        const newTodo = {
            ...todo, id: Date.now()        
        }
        addTodo(newTodo)
        setTodo({title: '', category: ''})
        setDefaultValue("Без категории")
    }

    const createCategory = (category) => {
        setTodo({...todo, category: category})
    }

    return (
        <form className="todo__form">
            <MyInput
                value={todo.title}
                type="text"
                placeholder="Your todo.."
                onChange={(e) => setTodo({...todo, title: e.target.value})}
            />
            <MySelect 
                createCategory={createCategory}
                defaultValue={defaultValue} setDefaultValue={setDefaultValue}/>
            <MyButton 
                btnType="add" 
                style={{backgroundColor: 'transparent', border: '1px solid #fff'}}
                onClick={(e) => addTodoHandler(e)}
            >
                Add
            </MyButton>
        </form>
    )
}

export default TodoForm