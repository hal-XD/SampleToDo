
import React from "react"
import { InputTypes } from "../../types/MyHtmlAttributes";
import { Input } from "../atoms/Input";
import { Label } from "../atoms/Label";

type CreateTaskProps = {
    handleChange: (event: React.FormEvent<HTMLFormElement>) => void,
}

export const CreateTask = (props:CreateTaskProps) => {
    const {handleChange} = props;
    return(
        <div>
            <form onSubmit={handleChange}>
                <div>
                    <Label htmlFor="newTask" value="newTask:"></Label>
                    <Input type={InputTypes.Text} name="newTask" id="newTask" placeholder="newTask"></Input>
                    <Input type={InputTypes.Submit} name="submit" value="Create" id="create"></Input>
                </div>
            </form>
        </div>
    )
}
