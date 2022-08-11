import TopForm from './TopForm'
import Lists from './List'


function App() {
  return (
    <section className="todo-parent">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="todo-box">
              <h4 className="title">لیست کارها</h4>
              <TopForm />
              <Lists />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
