const TodoReducer = (
    state,
    action,
) => {

    switch (action.type) {
        case "SET_TODOS":
            return {
                ...state,
                todos: action.payload
            }
        case "SET_ERROR":
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default TodoReducer
