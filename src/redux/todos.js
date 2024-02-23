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
           
        },
        updateTodo: (state, action) => {
            
        },
        toggleDone: (state, action) => {
           
        }
    }
})

export const {addTodo, deleteTodo, updateTodo, loadData, toggleDone} = todosSlice.actions

export default todosSlice;