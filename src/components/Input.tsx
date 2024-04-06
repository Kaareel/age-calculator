interface Props {
    title: string
    placeholder: string
    error: string
    onChange: (e: any) => void
}

function Input(props: Props){
    return (
        <div className="flex flex-col mb-[35px]">
            <label>{props.title}</label>
            <input type="number" placeholder={props.placeholder} onChange={props.onChange} className={`mt-3 mr-3 py-3 px-6 rounded-[10px] border ${props.error ? "border-red-500 bg-red-100" : "border-current"} `}/>
            {props.error && <span className="text-red-500 ">{props.error}</span>}
        </div>
    )
}

export default Input;