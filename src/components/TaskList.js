import {useSelector} from 'react-redux'
import TaskItem from "./TaskItem";

const TaskList = () => {
  const todos = useSelector(state => {
    return state.todos.todos;
  })

  return (
    <div className="task-list flex flex-col gap-3 p-10 container bg-gray-900 mx-auto lg:max-w-6xl">
      {todos.length === 0 && <p className="text-center">No task to show</p>}

      {todos.map((todo) => (
        <TaskItem
          todo={todo}
          key={todo.id}
        />
      ))}
    </div>
  );
};

export default TaskList;
