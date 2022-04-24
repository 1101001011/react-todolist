import { useState } from "react"
import MyButton from "./UI/button/MyButton"
import MyInput from "./UI/input/MyInput"
import MySelect from "./UI/select/MySelect"

const TodoForm = ({addTodo}) => {
    const [todo, setTodo] = useState({ title: '', category: '', color: '' })
    const [defaultValue, setDefaultValue] = useState("Categories")

    const addTodoHandler = (e) => {
        e.preventDefault()
        const newTodo = {
            ...todo, id: Date.now()        
        }
        addTodo(newTodo)
        setTodo({title: '', category: '', color: ''})
        setDefaultValue("Categories")
    }

    const createCategory = (category) => {
        if (category === 'Study') setTodo({...todo, category: category, color: '#fff9ed'})
        if (category === 'Daily') setTodo({...todo, category: category, color: '#edf8ff'})
        if (category === 'Job') setTodo({...todo, category: category, color: '#ffeded'})
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
                style={{backgroundColor: '#000'}}
                onClick={(e) => addTodoHandler(e)}
            >
                Add
            </MyButton>
        </form>
    )
}

export default TodoForm