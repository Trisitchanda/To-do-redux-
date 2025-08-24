import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const AddTodo = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        if (!input.trim()) return;
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <form
            onSubmit={addTodoHandler}
            className="flex items-center w-full max-w-md mx-auto bg-white/80 backdrop-blur-sm shadow-lg rounded-lg overflow-hidden"
        >
            <input
                type="text"
                placeholder="Write a todo..."
                className="flex-1 px-4 py-2 text-gray-700 placeholder-gray-400 bg-transparent outline-none focus:ring-2 focus:ring-green-500"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button
                type="submit"
                className="px-5 py-2 bg-green-600 text-white font-medium hover:bg-green-700 active:scale-95 transition-all duration-200"
            >
                + Add
            </button>
        </form>

    )
}

export default AddTodo
