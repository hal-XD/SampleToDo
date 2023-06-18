import { Li } from "../atoms/Li"
import { TTasks, TaskState } from "../../types/ToDoTypes"
import React, { Fragment } from "react"

interface TaskProps {
    tasks: TTasks,
    showState: TaskState,
    onClick: React.MouseEventHandler<HTMLElement>,
}

export const Tasks = ({tasks, showState,onClick}: TaskProps) => {

    // stateの状態によってtaskの見た目を変えるようにしてもよい。
    return (
        <ul className="max-w-md space-y-1 text-black-500 list-disc list-inside dark:text-black-400">
            {tasks.tasks.map((task) => (
                showState === task.state || showState === TaskState.ALL ?
                <Li content={task.value} onClick={onClick} value={task.id} key={task.id as unknown as string}></Li>
                : <Fragment></Fragment>
            ))}
        </ul>
    )
}