import { useState } from "react";
import { RToDoTemplate } from "./templates/RToDoTemplate"

import { TaskState,TTasks } from "../types/ToDoTypes";

export const RToDoPage = () => {
    const [tasks, setTasks] = useState<TTasks>({count:0,tasks:[]});
    const [showState, setShowState] = useState<TaskState>(TaskState.ALL);
    return (
        <RToDoTemplate tasks={tasks} setTasks={setTasks} showState={showState} setShowState={setShowState}></RToDoTemplate>
    )
}