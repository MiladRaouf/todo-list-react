import { createContext } from "react";

export const TasksContext = createContext({
    taskItems: [],
    setTaskItems: () => {}
});