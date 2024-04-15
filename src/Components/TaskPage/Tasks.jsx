import { useContext, useEffect, useState } from "react"
import TodoContext from "../../context/TodoContext"
import CheckBoxBlank from "../Svg/CheckBoxBlank"
import CheckBoxDone from "../Svg/CheckBoxDone"
import Trash from "../Svg/Trash"
import FilterTask from "./FilterTask"

const Tasks = ({

}) => {

    const { todos, getTasks, error } = useContext(TodoContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchData = async () => {
            await getTasks()
            setLoading(false)
        }
        fetchData()
    }, [getTasks])

    return <>
        <section className="max-w-7xl mx-auto px-6">
            <h1 className="text-2xl">Tasks page</h1>

            <FilterTask />

            {error && <section>
                <p className="text-3xl text-center text-red-400">Can not connect to the server</p>
            </section>}
            {loading && <section className="flex justify-center items-center">
                <div
                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                    <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Loading...</span>
                </div>
            </section>}

            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {
                    todos && todos.map(item => {
                        return <section
                            key={item.id}
                            className={"flex justify-between border-2 rounded items-center px-2 py-4 xl:py-6 " + (item.completed && "bg-gray-200")}
                        >
                            <div className="line-clamp-1 text-lg xl:text-xl">{item.completed ? <del>{item.title}</del> : <p>{item.title}</p>}</div>
                            <div className="flex">
                                {item.completed ? <CheckBoxDone /> : <CheckBoxBlank />}
                                <Trash />
                            </div>
                        </section>
                    })
                }
            </section>
        </section>
    </>
}

export default Tasks
