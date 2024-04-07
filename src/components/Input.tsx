interface Props {
    title: string
    placeholder: string
    error: string
    name: string
    onChange: (e: any) => void
}

function Input(props: Props){
    return (
        <div className="flex flex-col mb-[35px]">
            <label className="text-textColorTitle tracking-wider">{props.title}</label>
            <input 
            type="text"
            name={props.name}
            placeholder={props.placeholder} 
            onChange={props.onChange} 
            className={`mt-3 mr-5 p-3 w-32 text-3xl tracking-wider rounded-[10px] border border-inherit ${props.error ? "border-red-500 bg-red-100" : "border-current"} `}/>
            {props.error && <span className="text-red-500 ">{props.error}</span>}
        </div>
    )
}

export default Input;