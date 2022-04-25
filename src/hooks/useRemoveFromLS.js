export const useRemoveFromLS = (todo) => {
    let todos = JSON.parse(localStorage.getItem('todos'))
    todos = todos.filter(t => t.id !== todo.id)
    localStorage.setItem('todos', JSON.stringify(todos));
}