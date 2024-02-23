import {createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        searchQuery: "",
        lastId: 0,
    },
    reducers: {
        loadData: (state) => {
            state.todos = [{
                id: state.lastId,
                todo: "Finish react assignment",
                done: true,
            }]
        },
        addTodo: (state, action) => {
            // The action contains the payload
            state.lastId = state.lastId+1
            state.todos = [...state.todos, {
                id: state.lastId,
                todo: action.payload,
                done: false,
            }]
        },
        deleteTodo: (state, action) => {
            // action's payload contains an index
            state.todos = state.todos.filter(todo => {
                return todo.id !== action.payload
            })
        },
        updateTodo: (state, action) => {
            // action's payload contains an index and new data
            state.todos[action.payload.id] = {
                ...state.todos[action.payload.id],
                todo: action.payload.todo
            }
        },
        toggleDone: (state, action) => {
            console.log(action.payload)
            if (state.todos[action.payload]) {
                state.todos[action.payload] = {
                    ...state.todos[action.payload],
                    done: !state.todos[action.payload].done
                }
            }
        }
    }
})

export const {addTodo, deleteTodo, updateTodo, loadData, toggleDone} = todosSlice.actions

export default todosSlice;