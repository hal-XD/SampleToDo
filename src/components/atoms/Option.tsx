
type OptionProps = {
    value: number,
    content: string,
}

export const Option = ({value,content}: OptionProps) => {
    return (
        <option value={value}>{content}</option>
    )
}