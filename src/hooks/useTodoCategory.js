export const useTodoCategory = (category, todo, setTodo) => {
    switch(category) {
        case 'Study':
            setTodo({...todo, category: category, color: '#fff9f0'})
            break
        case 'Sports':
            setTodo({...todo, category: category, color: '#f0f4ff'})
            break
        case 'Daily':
            setTodo({...todo, category: category, color: '#f0fff0'})
            break
        case 'Job':
            setTodo({...todo, category: category, color: '#fff0f0'})
            break
        default:
            setTodo({...todo, category: category, color: ''})
    }
}