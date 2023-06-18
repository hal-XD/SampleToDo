
interface Button1Props {
    onClick: React.MouseEventHandler<HTMLButtonElement>
    text: string
    value?:string,
    type?: "button" | "submit" | "reset"
}

/**
 ボタンの見た目
 props: onClickとtext
*/
export const Button = (props: Button1Props) => {
    const {onClick, text, value,type} = props;
    return (
        <button
            type={type?type:"button"} 
            onClick={onClick}
            value={value}
            className="bg-blue-500 hover:bg-blue-700 text-white 
            font-bold py-2 px-4 rounded-full mx-2"
        >
            {text}
        </button>
    )
}