import { useContext, useEffect } from "react"
import TodoContext from "../../context/TodoContext"
import axios from "axios"

const Tasks = ({

}) => {

    const { todos, dispatch } = useContext(TodoContext)

    useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/todos")
        //     .then(res => res.json())
        //     .then(data => {
        //         todoContext.dispatch({ type: 'SET_TODOS', payload: data })
        //     })

        const fetchData = async () => {
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
                dispatch({
                    type: "SET_TODOS",
                    payload: res.data
                })
            } catch (err) {
                console.log(err.message)
            }
        }
        fetchData()
    }, [])

    return <>
        <section className="max-w-7xl mx-auto px-6">
            <h1 className="text-2xl">Tasks page</h1>
            {
                todos && todos.map(item => {
                    return <section key={item.id}>
                        <h1>{item.title}</h1>
                    </section>
                })
            }
        </section>
    </>
}

export default Tasks
