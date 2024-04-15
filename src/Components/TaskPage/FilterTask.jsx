import { useContext, useState } from "react"
import TodoContext from "../../context/TodoContext"

const FilterTask = ({

}) => {

    const { filterTasksNumber } = useContext(TodoContext)
    const filterNumberHandler = async (e) => {
        setLoading(true)
        await filterTasksNumber(e.target.value)
        setLoading(false)
    }

    const filterCompletedHandler = (e) => {
        console.log(e.target.value)
    }

    const [loading, setLoading] = useState(false)

    return <>
        <div className="flex gap-2 items-center py-6">
            <p>Filter :</p>
            <select
                className="w text-lg px-4 py-2 bg-white border-2 rounded-lg"
                onChange={(e) => filterNumberHandler(e)}
            >
                <option value="null">All</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
            </select>
            {loading && <section className="flex justify-center items-center">
                <div
                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                    <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Loading...</span>
                </div>
            </section>}

            <select
                className="w text-lg px-4 py-2 bg-white border-2 rounded-lg"
                onChange={(e) => filterCompletedHandler(e)}
            >
                <option>All tasks</option>
                <option value="uncompleted">uncompleted</option>
                <option value="completed">Completed</option>
            </select>
        </div>
    </>
}

export default FilterTask
