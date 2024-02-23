import { useEffect } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { useDispatch} from 'react-redux'
import { loadData } from "./redux/todos";


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData())
  }, []);

  return (
    <div className="wrapper bg-gradient-to-t from-gray-900 to-teal-900 min-h-screen text-xl text-gray-100 flex flex-col py-10">
          <Header />
          <AddTask />
          <TaskList />
    </div>
  );
};

export default App;
