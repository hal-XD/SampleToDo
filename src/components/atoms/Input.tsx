import React from "react"
import { InputTypes } from "../../types/MyHtmlAttributes"
interface InputProps {
    name: string,
    value?: string,
    type?: InputTypes,
    placeholder?:string,
    id: string,
}

// typeによって返すCSSを変更する
export const Input = ({name, value,type = InputTypes.Text, placeholder,id}: InputProps) => {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={value}
            id={id}></input>

    )
}