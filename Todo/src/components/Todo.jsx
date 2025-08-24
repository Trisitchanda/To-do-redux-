import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'


const Todo = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    return (
        <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📋 Todos</h2>

            <ul className="space-y-3">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="flex items-center justify-between bg-white/80 backdrop-blur-sm shadow-md rounded-lg px-4 py-2 transition-all duration-200 hover:shadow-lg"
                    >
                        <span className="text-gray-700">{todo.text}</span>

                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="px-3 py-1 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 active:scale-95 transition-all duration-200"
                        >
                            ✕
                        </button>
                    </li>
                ))}
            </ul>
        </>

    )
}

export default Todo
