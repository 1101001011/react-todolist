import { useGetFromLS } from './useGetFromLS'

export const useLocalStorage = (todo) => {
    const all = useGetFromLS()
    all.push(todo)

    localStorage.setItem('todos', JSON.stringify(all))
}

