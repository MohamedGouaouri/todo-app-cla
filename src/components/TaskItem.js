import { useState } from "react";
import {useDispatch} from 'react-redux'

import { FiEdit, FiTrash } from "react-icons/fi";
import { deleteTodo, toggleDone, updateTodo } from "../redux/todos";

const TaskItem = ({ todo }) => {
  const [editedText, setEditedText] = useState("")
  const [isEditing, setEditing] = useState(false)


  const handleEdit = () => {
    setEditing(true)
  }
  const handleEditSubmitter = (event) => {
   
  }

  const handleDelete = (id) => {
  }

  const handleToggleDone = (id) => {
  
  }

  return (
    <div className="task-item flex justify-between items-center bg-gradient-to-r from-gray-800 to-slate-800 p-5 rounded hover:from-teal-900 hover:to-gray-800 group">
      <div className="task-item-left flex gap-3">
        <span className="self-center">
          <input
            type="checkbox"
            className="accent-teal-400"
            checked={todo.done}
            onChange={() => handleToggleDone(todo.id)}
          />
        </span>

        {isEditing && (
          <form onSubmit={(e) => handleEditSubmitter(e, todo.id)}>
            <input
              className="bg-transparent outline-none border-b-2 border-gray-500 pb-1 w-full focus:border-teal-500"
              type="text"
              required
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
          </form>
        )}
        {!isEditing && (
          <p
            className={`group-hover:text-teal-400 ${
              todo.done
                ? "line-through text-gray-500 group-hover:text-teal-600"
                : null
            }`}
          >
            {todo.todo}
          </p>
        )}
      </div>
      <div className="task-item-right flex gap-3 ">
        <button 
          onClick={() => {
            handleEdit()
          }}
        >
          <FiEdit className="text-gray-500 hover:text-teal-500 cursor-pointer duration-300" />
        </button>
        <button 
          onClick={() => {
            handleDelete(todo.id)
          }}
        >
          <FiTrash className="text-gray-500 hover:text-red-500 cursor-pointer duration-300" />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
