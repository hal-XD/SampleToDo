import React, { Fragment } from "react";
import { Button } from "../atoms/Button";

type ClearButtonProps = {
    onClick: React.MouseEventHandler<HTMLElement>,
    text: string, 
}

export const ClearButton = ({onClick, text}: ClearButtonProps) => {
    return (
        <Fragment>
            <Button onClick={onClick} text={text} value="create"></Button>
        </Fragment>
    )
}