import React from 'react';
import { TaskState, TTasks } from '../../types/ToDoTypes';
import { ToDoOrganisms } from '../organisms/ToDoOrganisms';

type RtoDoProps = {
    tasks: TTasks,
    setTasks: React.Dispatch<React.SetStateAction<TTasks>>,
    showState: TaskState,
    setShowState: React.Dispatch<React.SetStateAction<TaskState>>,
}

export const RToDoTemplate = (props: RtoDoProps) => {
    const {tasks,setTasks,showState,setShowState} = props;
    return (
        <div className='m-auto w-1/2 my-10 p-1 border-cyan-700 border-2'>
            <ToDoOrganisms tasks={tasks} setTasks={setTasks} showState={showState} setShowState={setShowState}></ToDoOrganisms>
        </div>
    )
}
