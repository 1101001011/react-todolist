export const useGetFromLS = () => {
    return JSON.parse(localStorage.getItem('todos') || '[]')
}