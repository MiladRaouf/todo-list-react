import { useContext } from "react";
import { TasksContext } from "./TasksContext";

const Tasks = () => {
    const { taskItems, setTaskItems } = useContext(TasksContext);

    const handleChangeDone = (id) => {
        let index = taskItems.findIndex(item => item.id === id);
        let newTaskItems = [...taskItems];

        newTaskItems[index].done = !newTaskItems[index].done;
        setTaskItems(newTaskItems);
    };

    const handleDeleteTask = (id) => {
        setTaskItems(taskItems.filter(item => item.id !== id));
    };

    if (taskItems.length) {
        return (
            <ul>
                {taskItems.map(item => (
                    <li className={item.done ? 'list-group-item-success' : 'list-group-item-secondary'}>
                        <span>{item.title}</span>
                        <div>
                            <i onClick={() => handleChangeDone(item.id)} className={`fa fa-${item.done ? 'times' : 'check'}`}></i>
                            <i onClick={() => { handleDeleteTask(item.id) }} className="fa fa-trash-can"></i>
                        </div>
                    </li>
                ))}
            </ul>
        );
    } else {
        return <h6 className="no-list-title">موردی در لیست کارها وجود ندارد</h6>
    }

};

export default Tasks;