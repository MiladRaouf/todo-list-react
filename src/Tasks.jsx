import { useContext } from "react";
import { TasksContext } from "./TasksContext";

const Tasks = () => {
    const { taskItems, setTaskItems } = useContext(TasksContext);

    if (taskItems.length) {
        return (
            <ul>
                {taskItems.map(item => (
                    <li className={item.done ? 'list-group-item-success' : 'list-group-item-secondary'}>
                        <span>{item.title}</span>
                        <div>
                            {item.done ? <i className="fa fa-times"></i> : <i className="fa fa-check"></i>}
                            <i className="fa fa-trash-can"></i>
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