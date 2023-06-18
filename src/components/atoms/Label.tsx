
interface LabelProps {
    htmlFor:string,
    value: string,
}

export const Label = ({htmlFor, value}: LabelProps) => {
    return (
        <label 
            htmlFor={htmlFor}
            className="text-gray-700 text-sm font-blod mb-2 p-1"
        >
            {value}
        </label>
    )
}