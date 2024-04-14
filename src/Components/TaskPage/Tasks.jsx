import { useContext, useEffect } from "react"
import TodoContext from "../../context/TodoContext"

const Tasks = ({

}) => {

    const todoContext = useContext(TodoContext)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(data => {
                todoContext.dispatch({ type: 'SET_TODOS', payload: data })
            })
    }, [])

    return <>
        <section className="max-w-7xl mx-auto px-6">
            <h1 className="text-2xl">Tasks page</h1>
        </section>
    </>
}

export default Tasks
