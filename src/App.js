import TopForm from './TopForm'
import Tasks from './Tasks'
import { useContext, useState } from 'react';
import { TasksContext } from './TasksContext';

function App() {
  const context = useContext(TasksContext);
  const [taskItems, setTaskItems] = useState([
    {
      id: 1,
      title: 'کار شماره 1',
      done: true
    },
    {
      id: 2,
      title: 'کار شماره 2',
      done: false
    },
    {
      id: 3,
      title: 'کار شماره 3',
      done: false
    }
  ]);

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
