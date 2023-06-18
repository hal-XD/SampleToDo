import React, { Fragment } from "react"
import { TaskState } from "../../types/ToDoTypes"
import { Option } from "../atoms/Option"
import { Label } from "../atoms/Label"

interface FilterDoropDownProps {
    showState: TaskState,
    onChange: React.ChangeEventHandler<HTMLSelectElement>,
}

export const FilterDropDown = ({showState,onChange}: FilterDoropDownProps) => {
    return (
        <Fragment>
            <Label htmlFor="filter" value="Filter:"></Label>
            <select value={showState} onChange={onChange} id="filter"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <Option value={TaskState.ALL} content="ALL"></Option>
                <Option value={TaskState.COMPLETED} content="COMPLETED"></Option>
                <Option value={TaskState.PROGRESS} content="PROGERSS"></Option>
            </select>
        </Fragment>
    )
}
