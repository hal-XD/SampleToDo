import React from "react"

interface LiProps {
    content?: string,
    onClick?: React.MouseEventHandler<HTMLLIElement>,
    value?: number,
    id?: string,
}

export const Li = ({content, onClick, value, id}:LiProps) => {
    return (
        <li onClick={onClick} value={value} id={id}>{content}</li>
    )
}