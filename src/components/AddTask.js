import { useRef, useState } from "react";
import {useDispatch} from 'react-redux'
import { addTodo } from "../redux/todos";

const AddTask = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch()

  const inputRef = useRef(null);

  // add task handler event
  const addTaskHandler = (e) => {
    e.preventDefault();
    inputRef.current.blur();
    dispatch(addTodo(task))
    setTask("");
  };

  return (
    <form
      className="bg-gray-900 p-10 container mx-auto flex flex-col gap-5 justify-center items-center md:flex-row md:justify-between lg:max-w-6xl"
      onSubmit={addTaskHandler}
    >
      <input
        ref={inputRef}
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
        type="text"
        placeholder="What things to do?"
        className="bg-transparent outline-none border-b-2 border-gray-500 py-2 px-5 text-center md:text-left focus:border-teal-400 duration-300"
      />
      <button
        type="submit"
        className="bg-teal-900/30 py-2 px-5 border-2 border-teal-500 rounded text-teal-500 hover:bg-teal-500 hover:text-gray-900 duration-300"
      >
        Add task
      </button>
    </form>
  );
};

export default AddTask;
