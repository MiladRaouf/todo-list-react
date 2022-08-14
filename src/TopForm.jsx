import { useContext } from "react";
import { Fragment } from "react";
import { useState } from "react";
import { TasksContext } from "./TasksContext";


const TopForm = () => {
    const [inputTask, setInputTask] = useState('');
    const [emptyInputText, setEmptyInputText] = useState('');
    const { taskItems, setTaskItems } = useContext(TasksContext);

    const handleSetInputTask = (e) => {
        setInputTask(e.target.value);
    };

    const handleSaveTask = (e) => {
        e.preventDefault();
        if (inputTask.length > 2) {
            setTaskItems([...taskItems, { id: Math.random(), title: inputTask, done: false }]);
            setInputTask('');
            setEmptyInputText('');
        } else {
            setEmptyInputText('فعالیت مورد نظر خود را وارد کنید (تعداد حروف بیش از 2 حرف مجاز میباشد)');
        }
    };

    return (
        <Fragment>
            <h6 className={`empty-input-message ${emptyInputText.length ? 'active' : ''}`}>
                {emptyInputText}
            </h6>
            <form onSubmit={handleSaveTask}>
                <input type="text" placeholder="فعالیت مورد نظر خود را وارد کنید" value={inputTask} onChange={handleSetInputTask}></input>
                <button type="submit">ثبت</button>
            </form>
        </Fragment>
    );
};

export default TopForm;