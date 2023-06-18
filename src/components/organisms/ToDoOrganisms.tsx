import { CreateTask } from "../molecules/CreateTask"
import { ClearButton } from "../molecules/ClearButton"
import { FilterDropDown } from "../molecules/FilterDoropDown"
import { TaskState, TTasks,TTask } from "../../types/ToDoTypes"
import { Tasks } from "../molecules/Tasks"
import { Fragment } from "react"

type ToDoOrganismsProps = {
    tasks: TTasks,
    setTasks: React.Dispatch<React.SetStateAction<TTasks>>,
    showState: TaskState,
    setShowState: React.Dispatch<React.SetStateAction<TaskState>>,
}

/**
 * Organismsなのでこの層でuseStateなどか完結させたい。
 * ToDOで使用する状態とMoleculesの配置の情報をもつ。
 *  
 * @param props 
 * @returns 
 */
export const ToDoOrganisms = (props: ToDoOrganismsProps) => {
    const {tasks, setTasks, showState, setShowState} = props;

    /**
     * taskがクリックされたら stateを　COMPLETED <-> PROGERSS
     * で反転させる。
     * 
     * @param event React.MouseEvent
     */
    const switchTaskState = (event: React.MouseEvent) => {
        const taskId = Number(event.currentTarget.getAttribute("value"));
        const updateTasks = tasks.tasks.map((task) => {
            if (taskId === task.id) {
                const utask: TTask = {
                    id: task.id,
                    value: task.value,
                    state: task.state === TaskState.COMPLETED ? TaskState.PROGRESS : TaskState.COMPLETED
                }
                return utask;
            }
            return task;
        })
        const newTasks: TTasks = {
            count: tasks.count,
            tasks: updateTasks,
        }
        setTasks(newTasks);
    };

    const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const newTaskElm = form.elements.namedItem('newTask') as HTMLInputElement;
        const newTaskValue = newTaskElm.value;
        if (newTaskValue.length === 0) {
            return; // 何も入力されていない場合は、Taskを追加しない
        }
        const newTask: TTask = {
            id: tasks.count,
            value: newTaskValue,
            state: TaskState.PROGRESS, 
        } 
        const newTasks: TTasks = {
            count: tasks.count + 1,
            tasks: [...tasks.tasks, newTask]
        }
        setTasks(newTasks);
        newTaskElm.value = ''; // 入力フォームを空にする
    }

    const clearTasks = () => {
        const clearTasks : TTasks = {
            count:0,
            tasks:[],
        }
        setTasks(clearTasks);
    }

    const changeShowState = (event: React.ChangeEvent<HTMLSelectElement>) => {
        // enumの値にパターンマッチングさせたいが?
        switch(event.target.value){
            case "1":
                setShowState(TaskState.COMPLETED);
                break;
            case "2":
                setShowState(TaskState.PROGRESS);
                break;
            case "0":
            default:
                setShowState(TaskState.ALL);
        }
    };

    return (
        <Fragment>
            <CreateTask handleChange={handleChange}></CreateTask>
            <Tasks tasks={tasks} showState={showState} onClick={switchTaskState}></Tasks>
            <div className="mt-10 flex">
                <ClearButton onClick={clearTasks} text="Clear"></ClearButton>
                <FilterDropDown showState={showState} onChange={changeShowState}></FilterDropDown>
            </div>
        </Fragment>
    )
}