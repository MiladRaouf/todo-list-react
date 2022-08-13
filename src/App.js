import TopForm from './TopForm'
import Tasks from './Tasks'
import { useContext, useState } from 'react';
import { TasksContext } from './TasksContext';

function App() {
  const context = useContext(TasksContext);
  const [taskItems, setTaskItems] = useState([]);

  return (
    <section className="todo-parent">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="todo-box">
              <h4 className="title">لیست کارها</h4>
              <TasksContext.Provider value={{ taskItems, setTaskItems }}>
                <TopForm />
                <Tasks />
              </TasksContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
